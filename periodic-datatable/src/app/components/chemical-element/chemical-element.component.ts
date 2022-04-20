import { Component, Input } from '@angular/core'
import { ChemicalElementService } from '../../services/chemical-element.service'
import { ChemicalElement } from '../../models/chemical-element.model'

@Component({
  selector: 'chemical-element[symbol]',
  templateUrl: './chemical-element.component.html',
  styleUrls: ['./chemical-element.component.sass'],
})
export class ChemicalElementComponent{
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

  element!: ChemicalElement
}