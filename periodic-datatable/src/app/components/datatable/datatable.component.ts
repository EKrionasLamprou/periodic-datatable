import { Component } from '@angular/core'
import { Sorting } from 'src/app/enums/sorting.enum'
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { ElementalComponent } from 'src/app/models/elemental-component'
import { InvalidClassification } from 'src/app/models/error.model'
import { ChemicalElementService } from 'src/app/services/chemical-element.service'
import { ElementSelector } from 'src/app/services/element-selector.service'
import { ElementSorter } from 'src/app/services/element-sorter.service'
import { ModalService } from 'src/app/services/modal.service'
import { DatatableComponentDoc } from './datatable.component.doc'

/**
 * Represents a datatable with information about the chemical elements.
 */
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.sass']
})
export class DatatableComponent
  extends ElementalComponent implements DatatableComponentDoc {
  constructor(
    private chemicalElementService: ChemicalElementService,
    private elementSorter: ElementSorter,
    elementSelector: ElementSelector,
    modalService: ModalService) {
    super(elementSelector, modalService)
    this.elements = this.getElements()
  }

  elements: ChemicalElement[]
  sorting: Sorting = Sorting.ByZ
  isSortingReversed: boolean = false

  public getElements = (): ChemicalElement[] =>
    this.chemicalElementService.getElements()

  public getElementClassification = (classification: number): string => {
    const classificationName: string | undefined =
      this.chemicalElementService.getClassification(classification)

    if (!classificationName) {
      throw new InvalidClassification(classification)
    }
    return classificationName
  }

  public selectElement = (element: ChemicalElement): void => {
    this.element = element
    this.select()
  }

  public getRowHtmlClass = (element: ChemicalElement): string =>
    this.isSelected(element) ? 'selected' : ''

  public sort = (sortBy: number): void => {
    if (this.sorting === sortBy) {
      this.isSortingReversed = !this.isSortingReversed
    }
    else {
      this.isSortingReversed = false
    }
    this.sorting = sortBy
    this.elementSorter.sort(this.elements, this.sorting, this.isSortingReversed)
  } 

  private isSelected = (element: ChemicalElement): boolean =>
    this.elementSelector.selectedElement == element
}