import { Component, Input } from '@angular/core'
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

  constructor(private chemicalElementService: ChemicalElementService) {
  }
  ngOnInit() {
    this.element = this.chemicalElementService.getElement(this.atomicNumber)
    if (!this.element) {
      throw new Error(`There's no element atomic number '${this.atomicNumber}' in the universe.`);
    }
  }

  /** Represents a chemical element that describes its chemical properties and its place in the periodic table. */
  element!: ChemicalElement
}