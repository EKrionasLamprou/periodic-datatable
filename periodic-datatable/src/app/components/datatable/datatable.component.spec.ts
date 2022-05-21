import { ComponentFixture, TestBed } from '@angular/core/testing'
import { InvalidClassification } from 'src/app/models/error.model'
import { DatatableComponent } from './datatable.component'

describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should get element classification name on valid input', () => {
    const expectedOutputs = ['nonmetal', 'metaloid', 'metal']
    const len = expectedOutputs.length

    for (let i = 0; i < len; i++) {
      expect(component.getElementClassification(i)).toEqual(expectedOutputs[i])
    }
  })

  it('should throw error if classification input is invalid', () => {
    const invalidInput = [NaN, Infinity, -1, 3, 1000, 1.2]
    for (const input of invalidInput) {
      const error = new InvalidClassification(input)
      expect(() => component.getElementClassification(input)).toThrow(error)
    }
  })
})