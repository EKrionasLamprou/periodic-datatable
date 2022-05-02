import { Component, Input } from '@angular/core'
import { Classification } from 'src/app/enums/classification.enum'
import { Mode } from 'src/app/enums/mode.enum'
import { ElementSelector } from 'src/app/services/element-selector.service'
import { ModalService } from 'src/app/services/modal.service'
import { ModeService } from 'src/app/services/mode.service'
import { TemperatureService } from 'src/app/services/temperature.service'
import { ChemicalElement } from '../../models/chemical-element.model'
import { ChemicalElementService } from '../../services/chemical-element.service'

/**
 * Represents a single chemical element tile on the periodic table.
 */
@Component({
  selector: 'app-chemical-element[atomicNumber]',
  templateUrl: './chemical-element.component.html',
  styleUrls: ['./chemical-element.component.sass'],
})
export class ChemicalElementComponent{
  /** The atomic number or nuclear charge number (symbol Z) of a chemical element. */
  @Input()
  atomicNumber!: number

  constructor(
    private chemicalElementService: ChemicalElementService,
    private elementSelector: ElementSelector,
    private modeService: ModeService,
    private temperatureService: TemperatureService,
    private modalService: ModalService) {
  }
  ngOnInit() {
    this.element = this.chemicalElementService.getElement(this.atomicNumber)
    if (!this.element) {
      throw this.invalidAtomicNumberError()
    }
  }

  /** Represents a chemical element that describes its chemical properties and its place in the periodic table. */
  public element!: ChemicalElement

  /**
   * Sets this element as selected.
   */
  public select = () => this.elementSelector.select(this.element.atomicNumber)

  /**
   * Replaces this element with null as the selected one.
   */
  public unselect = () => this.elementSelector.select(null)

  /**
   * Checks whether or not 'Blocks' is the current selected mode.
   * @returns True if the selected mode is 'Blocks', false otherwise.
   */
  public isInBlockMode = (): boolean => this.modeService.getMode() === Mode.Blocks

  /**
   * Gets the element tile html class, based on the current mode.
   * @returns A string of the html class name.
   */
  public getElementTileClass = (): string => {

    const getElementClass = (): string => ''

    const getBlocksClass = (): string => {
      let tileClass: string = ''
      tileClass += `${this.element.block.name}`
      if (this.elementSelector.selectedElement?.block === this.element.block) {
        tileClass += ' highlighted'
      }
      return tileClass
    }

    const getGroupsClass = (): string => {
      let tileClass: string = ''
      if (this.element.group) {
        tileClass += this.element.group.index % 2 === 0 ? ' stripe-even' : ' stripe-odd'
        if (this.elementSelector.selectedElement?.group === this.element.group) {
          tileClass += ' highlighted'
        }
      }
      else {
        tileClass += ' disabled'
      }
      return tileClass
    }

    const getPeriodsClass = (): string => {
      let tileClass: string = ''
      tileClass += this.element.period.index % 2 === 0 ? ' stripe-even' : ' stripe-odd'
      if (this.elementSelector.selectedElement?.period === this.element.period) {
        tileClass += ' highlighted'
      }
      return tileClass
    }

    const getRadioactiveClass = (): string =>
      this.element.isRadioactive ? 'radioactive-true' : 'radioactive-false'

    const getStateClass = (): string => {
      const temperature = this.temperatureService.getTemperature()
      if (!this.element.meltingPoint || temperature < this.element.meltingPoint) {
        return 'state-solid'
      }
      if (!this.element.boilingPoint || temperature < this.element.boilingPoint) {
        return 'state-liquid'
      }
      return 'state-vapour'
    }

    const getClassificationClass = (): string =>
      'classification-' + Classification[this.element.classification].toString().toLowerCase()

    switch (this.modeService.getMode()) {
      case Mode.Elements: return getElementClass()
      case Mode.Blocks: return getBlocksClass()
      case Mode.Groups: return getGroupsClass()
      case Mode.Periods: return getPeriodsClass()
      case Mode.Radioactive: return getRadioactiveClass()
      case Mode.States: return getStateClass()
      case Mode.Classification: return getClassificationClass()
      default: throw new Error('Invalid mode.')
    }
  }

  /**
   * Opens the modal window.
   */
  public openModal = (): void => {
    this.modalService.open()
  }

  /**
   * Returns an Error that describes invalid atomic number input.
   * @returns An {@linkcode Error} object.
   */
  private invalidAtomicNumberError = () => new Error(
    `There's no known element with atomic number '${this.atomicNumber}' in the universe.`)
}