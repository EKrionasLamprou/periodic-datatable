import { Injectable } from '@angular/core'
import blockData from '../../assets/data/blocks.json'
import chemicalElementData from '../../assets/data/chemical-elements.json'
import groupData from '../../assets/data/groups.json'
import periodData from '../../assets/data/periods.json'
import { Block } from '../models/block.model'
import { ChemicalElement, Classification } from '../models/chemical-element.model'
import { Group } from '../models/group.model'
import { Period } from '../models/period.model'

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
    this.blocks = this.getBlocks()
    this.chemicalElements = this.getChemicalElements()
  }

  chemicalElements: ChemicalElement[]
  groups: Group[]
  periods: Period[]
  blocks: Block[]

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
   * @param index The number of a period row in the periodic table.
   * @returns An object of Period type corresponding to the given index.
   */
  public getPeriod = (index: number): Period =>
    this.periods.find(period => period.index === index) as Period

  /**
   * Finds a chemical element block by it's index.
   * @param index The number of a block in the periodic table.
   * @returns An object of Block type corresponding to the given index.
   */
  public getBlock = (index: number): Block =>
    this.blocks.find(block => block.index === index) as Block

  /**
   * Maps the chemical-elements.json data into an array of ChemicalElement objects.
   */
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
        group          : obj.group ? this.getGroup(obj.group) : null,
        period         : this.getPeriod(obj.period),
        block          : this.getBlock(obj.block),
      })

  /**
   * Maps the groups.json data into an array of Group objects.
   */
  private getGroups = (): Group[] =>
    groupData.groups.map(obj => <Group>obj)

  /**
   * Maps the periods.json data into an array of Period objects.
   */
  private getPeriods = (): Period[] =>
    periodData.periods.map(obj => <Period>obj)

  /**
   * Maps the blocks.json data into an array of Block objects.
   */
  private getBlocks = (): Block[] =>
    blockData.blocks.map(obj => <Block>obj)
}