import { Component, Input } from '@angular/core'
import { Mode } from 'src/app/enums/mode.enum'
import { ElementSelector } from 'src/app/services/element-selector.service'
import { ModeService } from 'src/app/services/mode.service'
import { ThermostatService } from 'src/app/services/thermostat.service'
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
    private thermostatService: ThermostatService) {
  }
  ngOnInit() {
    this.element = this.chemicalElementService.getElement(this.atomicNumber)
    if (!this.element) {
      throw new Error(`There's no element atomic number '${this.atomicNumber}' in the universe.`)
    }
  }

  /** Represents a chemical element that describes its chemical properties and its place in the periodic table. */
  element!: ChemicalElement

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

  public getElementTileClass = (): string => {
    let tileClass = ''

    switch (this.modeService.getMode()) {
      case Mode.Blocks:
        tileClass += ` ${this.element.block.name}`
        if (this.elementSelector.selectedElement?.block === this.element.block) {
          tileClass += ' selected-group'
        }
        break

      case Mode.Groups:
        if (this.element.group) {
          tileClass += this.element.group.index % 2 === 0 ? ' stripe-even' : ' stripe-odd'
          if (this.elementSelector.selectedElement?.group === this.element.group) {
            tileClass += ' selected-group'
          }
        }
        else {
          tileClass += ' disabled'
        }
        break

      case Mode.Periods:
        tileClass += this.element.period.index % 2 === 0 ? ' stripe-even' : ' stripe-odd'
        if (this.elementSelector.selectedElement?.period === this.element.period) {
          tileClass += ' selected-group'
        }
        break

      case Mode.Radioactive:
        tileClass += this.element.isRadioactive ? ' radioactive-true' : ' radioactive-false'
        break
      
      case Mode.States:
        const temperature = this.thermostatService.temperature
        if (!this.element.meltingPoint || temperature < this.element.meltingPoint) 
          tileClass += ' state-solid'
        else if (!this.element.boilingPoint || temperature < this.element.boilingPoint)
          tileClass += ' state-liquid'
        else
          tileClass += ' state-vapour'
    }
    return tileClass
  }
}