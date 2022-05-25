import { Injectable } from '@angular/core'
import { Sorting } from '../enums/sorting.enum'
import { ChemicalElement } from '../models/chemical-element.model'

@Injectable({
  providedIn: 'root'
})
export class ElementSorter {
  constructor() {
  }

  public sort = (
    collection: ChemicalElement[],
    sorting: Sorting,
    descending: boolean = false
  ): void => {
    collection.sort(function (a: ChemicalElement, b: ChemicalElement) {
      switch (sorting) {
        case Sorting.ByZ: return descending
          ? a.atomicNumber - b.atomicNumber
          : b.atomicNumber - a.atomicNumber

        case Sorting.ByName: return descending
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)

        case Sorting.BySymbol: return descending
          ? a.symbol.localeCompare(b.symbol)
          : b.symbol.localeCompare(a.symbol)

        case Sorting.ByClassification: return descending
          ? a.classification - b.classification
          : b.classification - a.classification

        case Sorting.ByRadiation: return descending
          ? (a.isRadioactive === b.isRadioactive)? 0 : a.isRadioactive? -1 : 1
          : (a.isRadioactive === b.isRadioactive)? 0 : b.isRadioactive? -1 : 1

        case Sorting.ByMeltingPoint: return descending
          ? (a.meltingPoint ?? Infinity) - (b.meltingPoint ?? Infinity)
          : (b.meltingPoint ?? Infinity) - (a.meltingPoint ?? Infinity)

        case Sorting.ByBoilingPoint: return descending
          ? (a.boilingPoint ?? Infinity) - (b.boilingPoint ?? Infinity)
          : (b.boilingPoint ?? Infinity) - (a.boilingPoint ?? Infinity)

        case Sorting.ByBlock: return descending
          ? a.block.index - b.block.index
          : b.block.index - a.block.index

        case Sorting.ByGroup: return descending
          ? (a.group?.index ?? 0) - (b.group?.index ?? 0)
          : (b.group?.index ?? 0) - (a.group?.index ?? 0)

        case Sorting.ByPeriod: return descending
          ? a.period.index - b.period.index
          : b.period.index - a.period.index

        default: return 0;
      }
    })
  }
}