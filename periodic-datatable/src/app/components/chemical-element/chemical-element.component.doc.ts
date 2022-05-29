import { ElementalComponent } from 'src/app/models/elemental-component'

/**
 * Documentation interface for the {@link ElementalComponent}.
 */
export interface ChemicalElementComponentDoc extends ElementalComponent {
  /** The atomic number (symbol Z) of a chemical element. */
  atomicNumber: number,


  /**
   * Gets the element tile html class, based on the current mode.
   * @returns A string of the html class name.
   */
  getElementTileHtmlClass(): string,

  /**
   * Returns true if the datatable is currently open, false otherwise.
   */
  isDatatableOpen(): boolean
}