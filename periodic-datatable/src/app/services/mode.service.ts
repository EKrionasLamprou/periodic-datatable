import { Injectable } from '@angular/core';
import { Mode } from '../enums/mode.enum'
import { Observable } from '../models/observable-pattern/observable.model'

/**
 * A service for getting and setting the global {@linkcode Mode} of the periodic table.
 */
@Injectable({
  providedIn: 'root'
})
export class ModeService extends Observable {

  constructor() {
    super(() => this.getMode())
  }

  /** Represents the current selected mode. Normal by default. */
  private mode: Mode = Mode.Element

  /**
   * Gets the current {@linkcode Mode} of the periodic table.
   * @returns The selected {@linkcode Mode}
   */
  public getMode = () => this.mode
  /**
   * Sets the current {@linkcode Mode} of the periodic table.
   */
  public setMode = (mode: number) => {
    this.mode = mode
    this.setModeStyle()
    this.notifyObservers()
  }

  /**
   * Sets the global style on mode change.
   */
  private setModeStyle = () => {
    if (this.mode === Mode.Radioactive)
      document.body.style.background = '#171517'
    else
      document.body.style.background = 'white'
  }
}