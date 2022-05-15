import { Component, Input, OnInit } from '@angular/core';
import { ElementalComponent } from 'src/app/models/elemental-component'
import { AtomicNumberError } from 'src/app/models/error.model'
import { ChemicalElementService } from 'src/app/services/chemical-element.service'
import { ElementSelector } from 'src/app/services/element-selector.service'

/**
 * Represents a row with chemical element data on the datatable.
 */
@Component({
  selector: 'app-datatable-row[atomicNumber]',
  templateUrl: './datatable-row.component.html',
  styleUrls: ['./datatable-row.component.sass']
})
export class DatatableRowComponent extends ElementalComponent implements OnInit {
  /** The atomic number or nuclear charge number (symbol Z) of a chemical element. */
  @Input()
  atomicNumber!: number

  constructor(
    private chemicalElementService: ChemicalElementService,
    elementSelector: ElementSelector
    ) {
    super(elementSelector)
  }
  ngOnInit(): void {
    this.element = this.chemicalElementService.getElement(this.atomicNumber)
    if (!this.element) {
      throw new AtomicNumberError(this.atomicNumber)
    }
  }
}