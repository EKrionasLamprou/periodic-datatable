import { LegendComponent } from './legend.component'

/**
 * Documentation interface for the {@link LegendComponent}.
 */
export interface LegendComponentDoc {
  /** The names of the features that are present in this legend. */
  items: string[],

  /**
   * Returns true if this legend has any features.
   * @returns True if the map has items, false otherwise.
   */
  hasContent(): boolean,
}