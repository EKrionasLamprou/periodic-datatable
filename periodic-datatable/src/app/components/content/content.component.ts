import { Component, OnInit } from '@angular/core';
import { DatatableService } from 'src/app/services/datatable.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent {
  constructor(private datatableService: DatatableService) {
  }

  public isDatatableOpen = (): boolean => this.datatableService.isVisible()

  public getHtmlClass = (): string =>
    this.isDatatableOpen()
      ? 'datatable-open'
      : ''
}