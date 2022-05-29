import { Component } from '@angular/core'
import { ModeService } from 'src/app/services/mode.service'
import { NavigationBarComponentDoc } from './navigation-bar.component.doc'

/**
 * Represents the navigation bar of the application, with buttons that change the table mode.
 */
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']
})
export class NavigationBarComponent implements NavigationBarComponentDoc {
  constructor(private modeService: ModeService) {
  }

  public setMode = (mode: number): void =>
    this.modeService.setMode(mode)

  public getInputClass = (mode: number): string =>
    this.modeService.getMode() === mode ? 'selected' : ''
}