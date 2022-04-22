import { Injectable } from '@angular/core';

/**
 * A service that gets and sets the global temperature variable of the application.
 */
@Injectable({
  providedIn: 'root'
})
export class ThermostatService {

  constructor() {
  }

  /** 0°C in Kelvin constant */
  private readonly zeroCelsius = 273.15
  /** The global temperature in Kelvin. */
  public temperature: number = this.zeroCelsius
  
  /**
   * Returns the global temperature in Celsius.
   */
  public getTemperatureInCelsius = (): number =>
    this.temperature - this.zeroCelsius
}