import { Component, OnInit } from '@angular/core';
import { ThermostatService } from 'src/app/services/thermostat.service'

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrls: ['./thermostat.component.sass']
})
export class ThermostatComponent implements OnInit {

  constructor(private thermostatService: ThermostatService) { }

  ngOnInit(): void {
  }

  public onTemperatureChange = (value: string) =>
    this.thermostatService.temperature = parseFloat(value)
}
