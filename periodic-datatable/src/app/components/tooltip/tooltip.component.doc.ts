import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { TooltipComponent } from './tooltip.component'

export interface TooltipComponentDoc {
  /**
   * The type of the toolip component that matches a given mode.
   * Can be set to 'elements', 'blocks', 'groups', or 'periods' so that the
   * title and description of the tooltip matches the respective modes.
   * Alternatively, setting it to 'auto' will automatically update the tooltip
   * to match the current mode.
   */
  type: string,

  /** Represents the selected element to be shown in the tooltip. */
  element: ChemicalElement | null,

  /**
   * Returns the html class, based on the mode and the radioactivity of the
   * selected element.
   * @returns A string on the html class name.
   */
  getRadioactivityClass(): string,

  /**
   * Returns the title of the tooltip.
   */
  getTitle(): string,

  /**
   * Returns the description of the tooltip.
   */
  getDescription(): string

  /**
   * Returns the background text of the tooltip.
   */
  getBackgroundText(): string

  /**
   * Whether or not the tooltip has information to show for the selected element.
   * @returns True if the tooltip has information to show, false otherwise.
   */
  hasData(): boolean,
}