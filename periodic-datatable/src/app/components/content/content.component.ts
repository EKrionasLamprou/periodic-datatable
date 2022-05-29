import { Component } from '@angular/core';
import { DatatableService } from 'src/app/services/datatable.service';
import { ContentComponentDoc } from './content.component.doc';

/**
 * A component that contains the main content of the application.
 */
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements ContentComponentDoc{
  constructor(private datatableService: DatatableService) {
  }

  public isDatatableOpen = (): boolean => this.datatableService.isVisible()

  public getHtmlClass = (): string => this.isDatatableOpen() ? 'datatable-open' : ''
}