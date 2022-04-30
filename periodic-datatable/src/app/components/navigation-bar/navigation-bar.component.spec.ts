import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ModeService } from 'src/app/services/mode.service'
import { NavigationBar } from './navigation-bar.component'

describe('ControlPanelComponent', () => {
  let component: NavigationBar
  let fixture: ComponentFixture<NavigationBar>
  let modeService: ModeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationBar]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBar)
    component = fixture.componentInstance
    fixture.detectChanges()
    modeService = TestBed.inject(ModeService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set mode', () => {
    component.setMode(1)
    expect(modeService.getMode()).toEqual(1)
  })

  it('should get input class', () => {
    modeService.setMode(1)
    expect(component.getInputClass(1)).toEqual('selected')
    expect(component.getInputClass(2)).toEqual('')
    expect(component.getInputClass(0)).toEqual('')
  })
})