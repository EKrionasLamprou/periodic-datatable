import { Component } from '@angular/core';
import { DatatableService } from 'src/app/services/datatable.service'

/**
 * Represents a button that shows/hides the datatable.
 */
@Component({
  selector: 'app-datatable-toogle',
  templateUrl: './datatable-toogle.component.html',
  styleUrls: ['./datatable-toogle.component.sass']
})
export class DatatableToogleComponent {
  constructor(private datatableService: DatatableService) {
  }

  public toogle = (): void => {
    this.datatableService.toogle()
  }

  public getButtonText = (): string =>
    this.datatableService.isVisible()
      ? 'Close Datatable'
      : 'Open Datatable'
}