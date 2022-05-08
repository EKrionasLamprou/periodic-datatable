import { Component, OnInit } from '@angular/core'
import { ModeService } from 'src/app/services/mode.service'

/**
 * Represents the navigation bar of the application, with buttons that change the table mode.
 */
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']
})
export class NavigationBarComponent {

  constructor(private modeService: ModeService) {
  }

  /**
   * Sets the mode of the periodic table.
   * @param mode A number that represents a mode.
   */
  public setMode = (mode: number) =>
    this.modeService.setMode(mode)

  /**
   * Gets the html class of each input and determines wheter or not it is selected.
   */
  public getInputClass = (mode: number): string =>
    this.modeService.getMode() === mode ? 'selected' : ''
}