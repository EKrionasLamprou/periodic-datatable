import { ChemicalElement } from "./chemical-element.model"

abstract class Information {
    constructor(element: ChemicalElement) {
        this.element = element
    }

    public element: ChemicalElement

    abstract getTitle(): string
    abstract getSubTitle(): string
    abstract getDescription(): string
}

class ElementInformation extends Information {
    getTitle = (): string => this.element.symbol
    getSubTitle = (): string => this.element.name
    getDescription = (): string => this.element.description
}
class BlockInformation extends Information {
    getTitle = (): string => this.element.block.name
    getSubTitle = (): string => ''
    getDescription = (): string => this.element.block.description
}
class GroupInformation extends Information {
    getTitle = (): string => this.element.group.name
    getSubTitle = (): string => this.element.group.trivialName ?? ''
    getDescription = (): string => this.element.group.description
}
class PeriodInformation extends Information {
    getTitle = (): string => `Period ${this.element.period.index}`
    getSubTitle = (): string => ''
    getDescription = (): string => this.element.period.description
}

export { Information, ElementInformation, BlockInformation, GroupInformation, PeriodInformation }