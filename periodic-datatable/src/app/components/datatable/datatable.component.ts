import { Component } from '@angular/core';
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { InvalidClassification } from 'src/app/models/error.model'
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

  /**
   * Returns all the chemical elements.
   * @returns A {@linkcode ChemicalElement} array of all the elements.
   */
  public getElements = (): ChemicalElement[] =>
    this.chemicalElementService.getElements()

  /**
   * Returns the classification name that corresponds to the given number.
   * @param classification The number that represents a classification. Must be between 0 and 2.
   * @returns A string that represents a classification name ('nonmetal', 'metaloid' or 'metal').
   */
  public getElementClassification = (classification: number): string => {
    const classificationName: string | undefined =
      this.chemicalElementService.getClassification(classification)

    if (!classificationName){
      throw new InvalidClassification(classification)
    }
    return classificationName
  }
}