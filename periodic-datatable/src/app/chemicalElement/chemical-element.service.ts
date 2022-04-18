import { Injectable } from '@angular/core'
import { ChemicalElement } from './chemicalElement'
import { Elements } from './elements'

/**
 * A service for getting chemical elements.
 */
@Injectable({
  providedIn: 'root'
})
export class ChemicalElementService {

  constructor() { }

  /**
   * Finds a chemical element by it's symbol.
   * @param symbol The symbol of the element (e.g. 'He' for Helium).
   * @returns An object of ChemicalElement type corresponding to the given symbol.
   */
  public getElement = (symbol: string): ChemicalElement =>
    Elements.list.find(element => element.symbol == symbol) as ChemicalElement
}