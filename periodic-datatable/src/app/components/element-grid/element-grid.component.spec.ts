import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ChemicalElement } from 'src/app/models/chemical-element.model'
import { ElementGridComponent } from './element-grid.component'

describe('ElementGridComponent', () => {
  let component: ElementGridComponent
  let fixture: ComponentFixture<ElementGridComponent>

  const createComponent = (grid: string) => {
    fixture = TestBed.createComponent(ElementGridComponent)
    component = fixture.componentInstance
    component.grid = grid
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
    component.grid = 'top'
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
    const invalidTypes: any[] = [undefined, null, NaN, 123, 0, 3.14, true, false]

    invalidStrings.forEach(input => {
      const message = `Invalid grid type '${input}'. Can only be 'top' or 'bottom'.`
      expect(() => createComponent(input)).toThrowError(message)
    })
    invalidTypes.forEach(input => {
      expect(() => createComponent(input)).toThrowError()
    })
  })
})