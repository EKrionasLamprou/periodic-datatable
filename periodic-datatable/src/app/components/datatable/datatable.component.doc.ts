import { Sorting } from 'src/app/enums/sorting.enum'
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { DatatableComponent } from './datatable.component'

/**
 * Documentation interface for the {@link DatatableComponent}.
 */
export interface DatatableComponentDoc {
  /** An array of chemical elements. */
  elements: ChemicalElement[],

  /** The current sorting method. */
  sorting: Sorting,

  /** True if sorting is reversed. */
  isSortingReversed: boolean,

  /**
   * Returns all the known chemical elements.
   * @returns A {@linkcode ChemicalElement} array of all the elements.
   */
  getElements(): ChemicalElement[],

  /**
   * Returns the classification name that corresponds to the given number.
   * @param classification The number that represents a classification. Must be between 0 and 2.
   * @returns A string that represents a classification name ('nonmetal', 'metaloid' or 'metal').
   */
  getElementClassification(classification: number): string,

  /**
   * Sets the given element as selected.
   * @param element The chemical element to be set as selected.
   */
  selectElement(element: ChemicalElement): void,

  /**
   * Gets the html for a given chemical element's row on the datatable.
   * @param element The element that corresponds to a datatable row.
   * @returns A string of value 'selected' if the given element is selected,
   * empty string otherwise.
   */
  getRowHtmlClass(element: ChemicalElement): string,

  /**
   * Sorts the elements.
   * @param sortBy A number representing the sorting method.
   */
  sort(sortBy: number): void,
}