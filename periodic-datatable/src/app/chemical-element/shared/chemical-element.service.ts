import { Injectable } from '@angular/core'
import { ChemicalElement } from './chemical-element.model'
import { ChemicalElements } from './chemical-elements'
import { Group } from './group.model'
import { Groups } from './groups'
import { Period } from './period.model'
import { Periods } from './periods'

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
    ChemicalElements.list.find(element => element.symbol === symbol) as ChemicalElement

  /**
   * Finds a chemical element group by it's index.
   * @param index The number of a group column in the periodic table.
   * @returns An object of Group type corresponding to the given index.
   */
  public getGroup = (index: number): Group =>
    Groups.list.find(group => group.index === index) as Group

  /**
   * Finds a chemical element period by it's index.
   * @param index The number a of period row in the periodic table.
   * @returns An object of Period type corresponding to the given index.
   */
  public getPeriod = (index: number): Period =>
    Periods.list.find(period => period.index === index) as Period
}