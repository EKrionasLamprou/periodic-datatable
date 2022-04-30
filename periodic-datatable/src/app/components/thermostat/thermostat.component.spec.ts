import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Mode } from 'src/app/enums/mode.enum'
import { ModeService } from 'src/app/services/mode.service'
import { TemperatureService } from 'src/app/services/temperature.service'
import { ThermostatComponent } from './thermostat.component'

describe('ThermostatComponent', () => {
  let component: ThermostatComponent;
  let fixture: ComponentFixture<ThermostatComponent>
  let temperatureService: TemperatureService
  let modeService: ModeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermostatComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermostatComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    temperatureService = TestBed.inject(TemperatureService)
    modeService = TestBed.inject(ModeService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set temperature on valid input', () => {
    const temperature = 100.5
    component.setTemperature(temperature.toString())
    expect(temperatureService.getTemperature()).toEqual(temperature)
  })
  
  it('should throw error on invalid temperature input', () => {
    const invalidInputs = ['', 'invalid', '5001']
    for (const input of invalidInputs) {
      expect(() => component.setTemperature(input)).toThrowError()
    }
  })

  it('should get temperature text', () => {
    const temperature = 100.5
    const expectedOutput = '100.5K (-173°C)'
    component.setTemperature(temperature.toString())
    expect(component.getTemperatureText()).toEqual(expectedOutput)
  })

  it('should get visibility class', () => {
    modeService.setMode(Mode.States)
    expect(component.getVisibilityClass()).toEqual('')
    modeService.setMode(Mode.Elements)
    expect(component.getVisibilityClass()).toEqual('hidden')
  })
})