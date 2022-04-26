import { Component, OnInit } from '@angular/core'
import { Mode } from 'src/app/enums/mode.enum'
import { ModeService } from 'src/app/services/mode.service'
import { TemperatureService } from 'src/app/services/temperature.service'

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrls: ['./thermostat.component.sass']
})
export class ThermostatComponent implements OnInit {

  constructor(
    private temperatureService: TemperatureService,
    private modeService: ModeService) {
  }

  ngOnInit(): void {
  }

  /**
   * Sets the value of the global temperature.
   * @param value The new temperature value.
   */
  public setTemperature = (value: string) =>
    this.temperatureService.temperature = parseFloat(value)

  /**
   * Gets the temparature text, based on the global temperature.
   * @returns A string of the following format: {temperature in Kelvin}K ({temperature in Celsius}°C)
   */
  public getTemperatureText = (): string =>
    `${this.temperatureService.temperature}K ` +
    `(${this.temperatureService.getTemperatureInCelsius()}°C)`

  /**
   * Returns true if the current mode is 'States', otherwise false.
   */
  public getVisibilityClass = (): string =>
    this.modeService.getMode() === Mode.States ? '' : 'hidden'
}