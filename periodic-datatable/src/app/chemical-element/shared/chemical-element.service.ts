import { Injectable } from '@angular/core'
import { ChemicalElement, Classification } from './chemical-element.model'
import { Group } from './group.model'
import { Period } from './period.model'
import chemicalElementData from '../../../assets/data/chemical-elements.json'
import groupData from '../../../assets/data/groups.json'
import periodsData from '../../../assets/data/periods.json'

/**
 * A service for getting chemical elements.
 */
@Injectable({
  providedIn: 'root'
})
export class ChemicalElementService {

  constructor() {
    this.groups = this.getGroups()
    this.periods = this.getPeriods()
    this.chemicalElements = this.getChemicalElements()
  }

  chemicalElements: ChemicalElement[]
  groups: Group[]
  periods: Period[]

  /**
   * Finds a chemical element by it's symbol.
   * @param symbol The symbol of the element (e.g. 'He' for Helium).
   * @returns An object of ChemicalElement type corresponding to the given symbol.
   */
  public getElement = (symbol: string): ChemicalElement =>
    this.chemicalElements.find(element => element.symbol === symbol) as ChemicalElement

  /**
   * Finds a chemical element group by it's index.
   * @param index The number of a group column in the periodic table.
   * @returns An object of Group type corresponding to the given index.
   */
  public getGroup = (index: number): Group =>
    this.groups.find(group => group.index === index) as Group

  /**
   * Finds a chemical element period by it's index.
   * @param index The number a of period row in the periodic table.
   * @returns An object of Period type corresponding to the given index.
   */
  public getPeriod = (index: number): Period =>
    this.periods.find(period => period.index === index) as Period

  private getChemicalElements = (): ChemicalElement[] =>
    chemicalElementData.chemicalElements.map(
      obj => <ChemicalElement>{
        atomicNumber   : obj.atomicNumber,
        name           : obj.name,
        symbol         : obj.symbol,
        description    : obj.description,
        classification : obj.classification as Classification,
        atomicMass     : obj.atomicMass,
        density        : obj.density,
        meltingPoint   : obj.meltingPoint,
        boilingPoint   : obj.boilingPoint,
        group          : this.getGroup(obj.group),
        period         : this.getPeriod(obj.period), 
      })

  private getGroups = (): Group[] =>
    groupData.groups.map(obj => <Group>obj)

  private getPeriods = (): Period[] =>
    periodsData.periods.map(obj => <Period>obj)
}