import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Mode } from 'src/app/enums/mode.enum'
import { ElementSelector } from 'src/app/services/element-selector.service'
import { ModeService } from 'src/app/services/mode.service'
import { TooltipComponent } from './tooltip.component'

describe('TooltipComponent', () => {
  let component: TooltipComponent
  let fixture: ComponentFixture<TooltipComponent>
  let elementSelector: ElementSelector
  let modeService: ModeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    elementSelector = TestBed.inject(ElementSelector)
    modeService = TestBed.inject(ModeService)
    elementSelector.select(1)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should get radioactivity class', () => {
    expect(component.getRadioactivityClass()).toBe('')

    modeService.setMode(Mode.Radioactive)
    expect(component.getRadioactivityClass()).toBe('radioactive-false')

    elementSelector.select(43)
    expect(component.getRadioactivityClass()).toBe('radioactive-true')
  })

  it('should get title', () => {
    expect(component.getTitle()).toBe('hydrogen')
  })

  it('should get description', () => {
    expect(component.getDescription()).toBe('Hydrogen is the lightest element. ' +
      'At standard conditions hydrogen is a gas of diatomic molecules having the formula H2.')
  })

  it('should get background text', () => {
    expect(component.getBackgroundText()).toBe('H')
  })

  it('should calculate if it has data', () => {
    expect(component.hasData()).toBeTrue()
    elementSelector.select(null)
    expect(component.hasData()).toBeFalse()
  })
})