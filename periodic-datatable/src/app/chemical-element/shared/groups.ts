import { Group } from "./group.model";

export class Groups {
    /**
     * A list of all chemical element groups.
     */ 
    static list: Group[] = [
        {
            index: 1,
            name: 'lithium family',
            trivialName: 'hydrogen and alkali metals',
            description: 'Group 1 is composed of hydrogen (H) and the alkali metals.' +
                'Elements of the group have one s-electron in the outer electron shell. ' +
                'Hydrogen is not considered to be an alkali metal as it is not a metal, ' +
                'though it is more analogous to them than any other group. ' +
                'This makes the group somewhat exceptional.',
        },
        {
            index: 18,
            name: 'helium family',
            trivialName: 'noble gases',
            description: 'The noble gases (historically also the inert gases; ' +
                'sometimes referred to as aerogens) make up a class of chemical ' + 
                'elements with similar properties; under standard conditions, ' +
                'they are all odorless, colorless, monatomic gases with very low ' +
                'chemical reactivity.'
        },
    ]
}