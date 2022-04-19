import { Component, Input } from '@angular/core'
import { ChemicalElementService } from './shared/chemical-element.service'
import { ChemicalElement } from './shared/chemical-element.model'

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
  }

  element!: ChemicalElement
}