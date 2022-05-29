import { ThermostatComponent } from './thermostat.component'

/**
 * Documentation interface for the {@link ThermostatComponent}.
 */
export interface ThermostatComponentDoc {
  /** The minumum temperature allowed in Kelvin. */
  readonly minTemperature: number,

  /** The maximum temperature allowed within the program in Kelvin. */
  readonly maxTemperature: number,

  /**
   * Sets the value of the global temperature.
   * @param value The new temperature value.
   */
  setTemperature(value: string): void,

  /**
   * Gets the temparature text, based on the global temperature.
   * @returns A string of the following format: {temperature in Kelvin}K ({temperature in Celsius}°C)
   */
  getTemperatureText(): string,

  /**
   * Returns true if the current mode is 'States', otherwise false.
   * This element should be hidden in other modes.
   */
  getVisibilityClass(): string,
}