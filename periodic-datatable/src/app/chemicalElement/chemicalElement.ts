/** 
 *  Represents a chemical element that describes its chemical properties and
 *  its place in the periodic table.
**/
export interface ChemicalElement {
    atomicNumber: number

    name: string
    symbol: string
    description: string
    appearance: string
    
    atomicMass: number
    density: number
    meltingPoint: number
    boilingPoint: number

    //to do:
    //group
    //period
}