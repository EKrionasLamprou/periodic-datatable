import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NavigationBar } from './navigation-bar.component'

describe('ControlPanelComponent', () => {
  let component: NavigationBar
  let fixture: ComponentFixture<NavigationBar>

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
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})