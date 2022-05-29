import { DatatableToogleComponent } from "./datatable-toogle.component";

/**
 * Documentation interface for the {@link DatatableToogleComponent}.
 */
export interface DatatableToogleComponentDoc {
  /**
   * Shows/hides the datatable.
   */
  toogle(): void,
  /**
   * Returns the text of the button.
   */
  getButtonText(): string,
}