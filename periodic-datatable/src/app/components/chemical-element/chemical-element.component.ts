import { Component, Input } from '@angular/core'
import { Classification } from 'src/app/enums/classification.enum'
import { Mode } from 'src/app/enums/mode.enum'
import { ElementSelector } from 'src/app/services/element-selector.service'
import { ModalService } from 'src/app/services/modal.service'
import { ModeService } from 'src/app/services/mode.service'
import { TemperatureService } from 'src/app/services/temperature.service'
import { ChemicalElementService } from '../../services/chemical-element.service'
import { AtomicNumberError } from '../../models/error.model'
import { DatatableService } from 'src/app/services/datatable.service'
import { ElementalComponent } from 'src/app/models/elemental-component'

/**
 * Represents a single chemical element tile on the periodic table.
 */
@Component({
  selector: 'app-chemical-element[atomicNumber]',
  templateUrl: './chemical-element.component.html',
  styleUrls: ['./chemical-element.component.sass'],
})
export class ChemicalElementComponent extends ElementalComponent {
  /** The atomic number or nuclear charge number (symbol Z) of a chemical element. */
  @Input()
  atomicNumber!: number

  constructor(
    private chemicalElementService: ChemicalElementService,
    private modeService: ModeService,
    private temperatureService: TemperatureService,
    modalService: ModalService,
    private datatableService: DatatableService,
    elementSelector: ElementSelector) {
      super(elementSelector, modalService)
  }
  ngOnInit() {
    this.element = this.chemicalElementService.getElement(this.atomicNumber)
    if (!this.element) {
      throw new AtomicNumberError(this.atomicNumber)
    }
  }

  /**
   * Checks whether or not 'Blocks' is the current selected mode.
   * @returns True if the selected mode is 'Blocks', false otherwise.
   */
  public isInBlockMode = (): boolean => this.modeService.getMode() === Mode.Blocks

  /**
   * Gets the element tile html class, based on the current mode.
   * @returns A string of the html class name.
   */
  public getElementTileHtmlClass = (): string => {
    let htmlClass = ''

    const getElementsHtmlClass = (): string => ''

    const getBlocksHtmlClass = (): string => {
      let blocksClass: string = ''
      blocksClass += `${this.element.block.name}-block`
      if (this.elementSelector.selectedElement?.block === this.element.block) {
        blocksClass += ' highlighted'
      }
      return blocksClass
    }

    const getGroupsHtmlClass = (): string => {
      let groupsClass: string = ''
      if (this.element.group) {
        groupsClass += this.element.group.index % 2 === 0 ? ' stripe-even' : ' stripe-odd'
        if (this.elementSelector.selectedElement?.group === this.element.group) {
          groupsClass += ' highlighted'
        }
      }
      else {
        groupsClass += ' disabled'
      }
      return groupsClass
    }

    const getPeriodsHtmlClass = (): string => {
      let periodsClass: string = ''
      periodsClass += this.element.period.index % 2 === 0 ? ' stripe-even' : ' stripe-odd'
      if (this.elementSelector.selectedElement?.period === this.element.period) {
        periodsClass += ' highlighted'
      }
      return periodsClass
    }

    const getRadioactiveHtmlClass = (): string =>
      this.element.isRadioactive ? 'radioactive-true' : 'radioactive-false'

    const getStateHtmlClass = (): string => {
      const temperature = this.temperatureService.getTemperature()
      if (!this.element.meltingPoint || temperature < this.element.meltingPoint) {
        return 'state-solid'
      }
      if (!this.element.boilingPoint || temperature < this.element.boilingPoint) {
        return 'state-liquid'
      }
      return 'state-vapour'
    }

    const getClassificationHtmlClass = (): string =>
      'classification-' + Classification[this.element.classification].toString().toLowerCase()

    if (this.isDatatableOpen()) {
      htmlClass += 'minimal '
    }
    if (this.element === this.elementSelector.selectedElement) {
      htmlClass += 'selected '
    }

    switch (this.modeService.getMode()) {
      case Mode.Elements: htmlClass += getElementsHtmlClass(); break
      case Mode.Blocks: htmlClass += getBlocksHtmlClass(); break
      case Mode.Groups: htmlClass += getGroupsHtmlClass(); break
      case Mode.Periods: htmlClass += getPeriodsHtmlClass(); break
      case Mode.Radioactive: htmlClass += getRadioactiveHtmlClass(); break
      case Mode.States: htmlClass += getStateHtmlClass(); break
      case Mode.Classification: htmlClass += getClassificationHtmlClass(); break
    }

    return htmlClass
  }

  /**
   * Returns true if the datatable is currently open, false otherwise.
   */
  public isDatatableOpen = (): boolean =>
    this.datatableService.isVisible()
}