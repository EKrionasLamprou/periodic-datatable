import { Component, Input } from '@angular/core'
import { ChemicalElementService } from './chemical-element.service'
import { ChemicalElement } from './chemicalElement'

@Component({
  selector: 'chemical-element[symbol]',
  templateUrl: './chemicalElement.component.html',
  styleUrls: ['./chemicalElement.component.sass'],
})

export class ChemicalElementComponent{
  @Input()
  symbol!: string

  constructor(private chemicalElementService: ChemicalElementService) {
  }

  ngOnInit() {
    this.element = this.chemicalElementService.getElement(this.symbol)
  }

  element!: ChemicalElement
}