import { Block } from "./block.model"
import { Group } from "./group.model"
import { Period } from "./period.model"

/** 
 *  Represents a classification of the chemical elements, based on their metallic properties.
 */
export enum Classification {
    /** A type of chemical element that generally lacks a predominance of metallic properties. */
    Nonmetal,
    /** A type of chemical element which has a preponderance of properties in between,
     * or that are a mixture of, those of metals and nonmetals. */
    Metaloid,
    /** A type of chemical element that has a predominance of metallic properties. */
    Metal,
}

/** 
 *  Represents a chemical element that describes its chemical properties and
 *  its place in the periodic table.
 */
export interface ChemicalElement {
    /** The atomic number or nuclear charge number (symbol Z) of a chemical element. */
    atomicNumber: number

    /** The name of the element. */
    name: string
    /** The symbol of the element (e.g. 'He' for Helium). */
    symbol: string
    /** A brief description of the element's properties. */
    description: string
    /** Represents a classification of the chemical elements, based on their metallic properties. */
    classification: Classification

    /** The mass of the element's atom in dalton (u).*/
    atomicMass: number
    /** The mass per volume of the element. */
    density: number
    /** The temperature (in kelvin) at which the element changes
     * state from solid to liquid at standard pressure. */
    meltingPoint: number
    /** The temperature (in kelvin) at which the element changes
     * state from liquid to gas at standard pressure. */
    boilingPoint: number

    /** The group in the periodic table this element belongs to. */
    group: Group
    /** The period in the periodic table this element belongs to. */
    period: Period
    /** The block in the periodic table this element belongs to. */
    block: Block
}