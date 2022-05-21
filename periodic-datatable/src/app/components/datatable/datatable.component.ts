import { Component } from '@angular/core';
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { ChemicalElementService } from 'src/app/services/chemical-element.service'

/**
 * Represents a datatable with information about the chemical elements.
 */
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.sass']
})
export class DatatableComponent {
  constructor(private chemicalElementService: ChemicalElementService) {
  }

  public getElements = (): ChemicalElement[] =>
    this.chemicalElementService.getElements()

  public getElementClassification = (classification: number): string =>
    this.chemicalElementService.getClassification(classification)
}