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
  symbol!: string

  constructor(private chemicalElementService: ChemicalElementService) {
  }

  ngOnInit() {
    this.element = this.chemicalElementService.getElement(this.symbol)
    if (!this.element) {
      throw new Error(`There's no element with symbol '${this.symbol}' in the universe.`);
    }
  }

  element!: ChemicalElement
}