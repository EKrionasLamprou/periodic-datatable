import { Component, Input } from '@angular/core';
import { ElementalComponent } from 'src/app/models/elemental-component'
import { ElementSelector } from 'src/app/services/element-selector.service'

/**
 * Represents a row with chemical element data on the datatable.
 */
@Component({
  selector: 'app-datatable-row[atomicNumber]',
  templateUrl: './datatable-row.component.html',
  styleUrls: ['./datatable-row.component.sass']
})
export class DatatableRowComponent extends ElementalComponent {
  /** The atomic number or nuclear charge number (symbol Z) of a chemical element. */
  @Input()
  atomicNumber!: number

  constructor(
    elementSelector: ElementSelector) {
    super(elementSelector)
  }
}