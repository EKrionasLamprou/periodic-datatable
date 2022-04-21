import { Injectable } from '@angular/core'
import { ChemicalElement } from '../models/chemical-element.model'
import { Observer } from '../models/observer.model'
import { ChemicalElementService } from './chemical-element.service'

/**
 * A service for storing the selected element. It uses the observable design pattern
 * to the selected element data to components.
 */
@Injectable({
  providedIn: 'root'
})
export class ElementSelector {

  constructor(private chemicalElementService: ChemicalElementService) {
  }

  /** The element that the user is hovering the cursor over. */
  public selectedElement: ChemicalElement | null = null
  /** The objects that 'observe' the selected element changes. */
  private subscribers: Observer[] = new Array()

  /**
   * A method to change the selected element and inform the subscribers.
   * @param atomicNumber The atomic number of the selected element.
   * Null if no element is currently selected.
   */
  public select = (atomicNumber: number | null) => {
    this.selectedElement = atomicNumber
      ? this.chemicalElementService.getElement(atomicNumber)
      : null
    this.informSubscribers()
  }

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
    this.subscribers.forEach(sub => sub.handle(this.selectedElement))
}