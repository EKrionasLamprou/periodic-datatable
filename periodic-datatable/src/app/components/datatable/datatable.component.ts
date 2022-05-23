import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { ElementalComponent } from 'src/app/models/elemental-component';
import { InvalidClassification } from 'src/app/models/error.model'
import { ChemicalElementService } from 'src/app/services/chemical-element.service'
import { ElementSelector } from 'src/app/services/element-selector.service';

/**
 * Represents a datatable with information about the chemical elements.
 */
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.sass']
})
export class DatatableComponent extends ElementalComponent {
  constructor(
    private chemicalElementService: ChemicalElementService,
    elementSelector: ElementSelector) {
    super(elementSelector)
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

    if (!classificationName) {
      throw new InvalidClassification(classification)
    }
    return classificationName
  }

  /**
   * Sets the given element as selected.
   * @param element The chemical element to be set as selected.
   */
  public selectElement = (element: ChemicalElement): void => {
    this.element = element
    this.select()
  }

  /**
   * Gets the html for a given chemical element's row on the datatable.
   * @param element The element that corresponds to a datatable row.
   * @returns A string of value 'selected' if the given element is selected,
   * empty string otherwise.
   */
  public getRowHtmlClass = (element: ChemicalElement): string =>
    this.isSelected(element) ? 'selected' : ''

  /**
   * Returns true if the given chemical is selected.
   * @param element The given chemical element.
   * @returns True if the given element is selected, false otherwise.
   */
  private isSelected = (element: ChemicalElement): boolean =>
    this.elementSelector.selectedElement == element
}