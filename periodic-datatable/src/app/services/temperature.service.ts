import { Injectable } from '@angular/core';

/**
 * A service that gets and sets the global temperature variable of the application.
 */
@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor() {
  }

  /** The minumum temperature allowed in Kelvin. */
  private readonly minTemperature = 0
  /** The maximum temperature allowed within the program in Kelvin. */
  private readonly maxTemperature = 5000
  /** 0°C in Kelvin constant */
  private readonly zeroCelsius = 273.15
  /** The global temperature in Kelvin. */
  private temperature: number = this.zeroCelsius
  
  /** Gets the global temperature in Kelvin. */
  public getTemperature = (): number => this.temperature

  /** Sets the global temperature in Kelvin. */
  public setTemperature = (value: number): void => {
    const isInRange = value >= this.minTemperature && value <= this.maxTemperature
    if (!isInRange) throw this.temperatureOutOfRangeError()
    this.temperature = value
  }

  /**
   * Gets the global temperature in Celsius.
   */
  public getTemperatureInCelsius = (): number =>
    Math.floor(this.temperature - this.zeroCelsius)
    
  /**
   * Returns an Error that describes that temperature value is out of range.
   * @returns An {@linkcode Error} object.
   */
   private temperatureOutOfRangeError = () => new Error(
    `Temperature must be between ${this.minTemperature} and ${this.maxTemperature}.`)
}