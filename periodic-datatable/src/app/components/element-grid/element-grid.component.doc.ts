import { ChemicalElement } from 'src/app/models/chemical-element.model'

/**
 * Documentation interface for the {@link ElementGridComponent}.
 */
export interface ElementGridComponentDoc {
  /** The type of the grid; top or bottom. */
  gridType: string,
  /** The chemical elements that belong to this grid. */
  elements: (ChemicalElement | null)[],
}