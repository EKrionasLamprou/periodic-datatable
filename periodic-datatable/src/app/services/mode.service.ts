import { Injectable } from '@angular/core';
import { Mode } from '../enums/mode.enum'

/**
 * A service for getting and setting the global {@linkcode Mode} of the periodic table.
 */
@Injectable({
  providedIn: 'root'
})
export class ModeService {

  constructor() {
  }

  /** Represents the current selected mode. Normal by default. */
  private mode: Mode = Mode.Normal

  /**
   * Gets the current {@linkcode Mode} of the periodic table.
   * @returns The selected {@linkcode Mode}
   */
  public getMode = () => this.mode
  /**
   * Sets the current {@linkcode Mode} of the periodic table.
   */
  public setMode = (mode: number) => this.mode = mode
}