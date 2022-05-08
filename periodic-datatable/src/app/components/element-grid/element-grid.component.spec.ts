import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { GridTypeError } from 'src/app/models/error.model'
import { ElementGridComponent } from './element-grid.component'

describe('ElementGridComponent', () => {
  let component: ElementGridComponent
  let fixture: ComponentFixture<ElementGridComponent>

  const createComponent = (grid: string) => {
    fixture = TestBed.createComponent(ElementGridComponent)
    component = fixture.componentInstance
    component.gridType = grid
    fixture.detectChanges()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementGridComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementGridComponent)
    component = fixture.componentInstance
    component.gridType = 'top'
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should get grid elements on valid input', () => {
    let input: string
    let expectedElements: (ChemicalElement | null)[]
    const elementGridService = component['elementGridService']

    input = 'top'
    expectedElements = elementGridService.getGrid().top()
    createComponent(input)
    expect(component['getGridElements']()).toEqual(expectedElements)

    input = 'bottom'
    expectedElements = elementGridService.getGrid().bottom()
    createComponent(input)
    expect(component['getGridElements']()).toEqual(expectedElements)
  })

  it('should throw error on invalid input', () => {
    const invalidStrings: string[] = ['', 'error', 'anything', ' top']

    invalidStrings.forEach(input => {
      const error = new GridTypeError(input)
      expect(() => createComponent(input)).toThrow(error)
    })
  })
})