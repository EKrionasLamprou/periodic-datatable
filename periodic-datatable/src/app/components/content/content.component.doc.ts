import { ContentComponent } from "./content.component"

/**
 * Documentation interface for the {@link ContentComponent}.
 */
export interface ContentComponentDoc {
  /**
   * Returns true if the datatable is open.
   */
  isDatatableOpen(): boolean,
  
  /**
   * Gets the html class of the component.
   * @returns A string of the html class name.
   */
  getHtmlClass(): string,
}