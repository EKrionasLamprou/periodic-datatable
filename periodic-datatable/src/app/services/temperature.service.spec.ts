import { TestBed } from '@angular/core/testing'
import { TemperatureService } from './temperature.service'

describe('ThermostatService', () => {
  let service: TemperatureService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TemperatureService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})