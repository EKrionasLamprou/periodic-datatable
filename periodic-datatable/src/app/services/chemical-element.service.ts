import { Injectable } from '@angular/core'
import blockData from '../../assets/data/blocks.json'
import chemicalElementData from '../../assets/data/chemical-elements.json'
import groupData from '../../assets/data/groups.json'
import periodData from '../../assets/data/periods.json'
import { Classification } from '../enums/classification.enum'
import { Block } from '../models/block.model'
import { ChemicalElement } from '../models/chemical-element.model'
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

  /** Represents a chemical element that describes its chemical properties and its place in the periodic table. */
  chemicalElements: ChemicalElement[]
  /** Represents a column of chemical elements in the periodic table. */
  groups: Group[]
  /** Represents a row of chemical elements in the periodic table. */
  periods: Period[]
  /** Represents a block of chemical elements in the periodic table. */
  blocks: Block[]

  /**
   * Finds a chemical element by it's symbol.
   * @param index The atomic number of the element (e.g. 1 for Helium).
   * @returns An object of {@linkcode ChemicalElement} type corresponding to the given symbol.
   */
  public getElement = (index: number): ChemicalElement =>
    this.chemicalElements.find(element => element.atomicNumber === index) as ChemicalElement

  public getElements = (i: number = 1, n: number | null = null): ChemicalElement[] => {
    // TO DO: Rework this code to make it more readable. ----------------------------------------------!
    const maxLength = this.chemicalElements.length
    const length = (n && i + n <= maxLength) ? n : maxLength
    let result = new Array<ChemicalElement>()

    for (let x = 0; x < length; x++)
      result.push(this.getElement(x + i))
    return result
  }

  /**
   * Finds a chemical element group by it's index.
   * @param index The number of a group column in the periodic table.
   * @returns An object of {@linkcode Group} type corresponding to the given index.
   */
  public getGroup = (index: number): Group =>
    this.groups.find(group => group.index === index) as Group

  /**
   * Finds a chemical element period by it's index.
   * @param index The number of a period row in the periodic table.
   * @returns An object of {@linkcode Period} type corresponding to the given index.
   */
  public getPeriod = (index: number): Period =>
    this.periods.find(period => period.index === index) as Period

  /**
   * Finds a chemical element block by it's index.
   * @param index The number of a block in the periodic table.
   * @returns An object of {@linkcode Block} type corresponding to the given index.
   */
  public getBlock = (index: number): Block =>
    this.blocks.find(block => block.index === index) as Block

  /**
   * Maps the chemical-elements.json data into an array of {@linkcode ChemicalElement} objects.
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
   * Maps the groups.json data into an array of {@linkcode Group} objects.
   */
  private getGroups = (): Group[] =>
    groupData.groups.map(obj => <Group>obj)

  /**
   * Maps the periods.json data into an array of {@linkcode Period} objects.
   */
  private getPeriods = (): Period[] =>
    periodData.periods.map(obj => <Period>obj)

  /**
   * Maps the blocks.json data into an array of {@linkcode Block} objects.
   */
  private getBlocks = (): Block[] =>
    blockData.blocks.map(obj => <Block>obj)
}