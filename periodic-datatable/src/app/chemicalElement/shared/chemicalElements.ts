import { ChemicalElement, Classification } from "./chemicalElement.model"

export class ChemicalElements {
    /**
    * A list of all known chemical elements.
    */
    static list: ChemicalElement[] = [
        {
            atomicNumber: 1,
            name: 'hydrogen',
            symbol: 'H',
            description: 'Hydrogen is the lightest element. At standard conditions hydrogen ' +
                'is a gas of diatomic molecules having the formula H2.',
            classification: Classification.Nonmetal,
            atomicMass: 1.00784,
            density: 0.08988,
            meltingPoint: 13.99,
            boilingPoint: 20.271,
            group: 1,
            period: 1,
        },
        {
            atomicNumber: 2,
            name: 'helium',
            symbol: 'He',
            description: 'A colourless, odourless, tasteless, non-toxic, inert, monatomic gas' +
                'and the first in the noble gas group in the periodic table.',
            classification: Classification.Nonmetal,
            atomicMass: 4.002602,
            density: 0.1786,
            meltingPoint: 0.95,
            boilingPoint: 4.222,
            group: 18,
            period: 1,
        }
    ]
}