import { NavigationBarComponent } from './navigation-bar.component'

/**
 * Documentation interface for the {@link NavigationBarComponent}.
 */
export interface NavigationBarComponentDoc {
  /**
   * Sets the mode of the periodic table.
   * @param mode A number that represents a mode.
   */
  setMode(mode: number): void,

  /**
   * Gets the html class of each input and determines wheter or not it is selected.
   */
  getInputClass(mode: number): string,
}