import { Injectable } from '@angular/core';
import { Mode } from '../enums/mode.enum'
import { Observer } from '../models/observer.model'

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
  /** The objects that 'observe' the selected element changes. */
  private subscribers: Observer[] = new Array()

  /**
   * Gets the current {@linkcode Mode} of the periodic table.
   * @returns The selected {@linkcode Mode}
   */
  public getMode = () => this.mode
  /**
   * Sets the current {@linkcode Mode} of the periodic table.
   */
  public setMode = (mode: number) => this.mode = mode

    /**
   * Subscribes an {@linkcode Observer} object to this observable.
   * @param observer The object to be subscribed.
   */
     public subscribe = (observer: Observer) => this.subscribers.push(observer)

     /**
      * Unsubscribes an {@linkcode Observer} object to this observable.
      * @param observer The object to be unsubscribed.
      */
     public unsubscribe = (observer: Observer) =>
       this.subscribers = this.subscribers.filter(sub => sub !== observer)
   
     /**
      * Calls the handle method of the {@linkcode Observer} objects that are subscribed.
      */
     private informSubscribers = (): void =>
       this.subscribers.forEach(sub => sub.handle(this.mode))
}