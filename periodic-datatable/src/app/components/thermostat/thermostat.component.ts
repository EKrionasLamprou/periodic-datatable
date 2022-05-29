import { Component, OnInit } from '@angular/core'
import { Mode } from 'src/app/enums/mode.enum'
import { ModeService } from 'src/app/services/mode.service'
import { TemperatureService } from 'src/app/services/temperature.service'
import { ThermostatComponentDoc } from './thermostat.component.doc'

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrls: ['./thermostat.component.sass']
})
export class ThermostatComponent
  implements OnInit, ThermostatComponentDoc {

  constructor(
    private temperatureService: TemperatureService,
    private modeService: ModeService) {
    this.minTemperature = temperatureService.minTemperature
    this.maxTemperature = temperatureService.maxTemperature
  }
  ngOnInit(): void {
  }

  public readonly minTemperature: number
  public readonly maxTemperature: number

  public setTemperature = (value: string): void => {
    const temperature = parseFloat(value)
    this.temperatureService.setTemperature(temperature)
  }

  public getTemperatureText = (): string =>
    `${this.temperatureService.getTemperature()}K ` +
    `(${this.temperatureService.getTemperatureInCelsius()}°C)`

  public getVisibilityClass = (): string =>
    this.modeService.getMode() === Mode.States ? '' : 'hidden'
}