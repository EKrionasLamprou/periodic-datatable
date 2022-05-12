import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DatatableToogleComponent } from './datatable-toogle.component'

describe('DatatableToogleComponent', () => {
  let component: DatatableToogleComponent
  let fixture: ComponentFixture<DatatableToogleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableToogleComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableToogleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})