import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
  constructor() {
  }

  private isHidden: boolean = false

  public isVisible = (): boolean => !this.isHidden

  public toogle = (): void => {
    this.isHidden = !this.isHidden
  }
}