import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AtomicNumberError } from 'src/app/models/error.model'
import { ChemicalElementComponent } from './chemical-element.component'

describe('ElementComponent', () => {
  let component: ChemicalElementComponent;
  let fixture: ComponentFixture<ChemicalElementComponent>

  const createComponent = (atomicNumber: number) => {
    fixture = TestBed.createComponent(ChemicalElementComponent)
    component = fixture.componentInstance
    component.atomicNumber = atomicNumber
    fixture.detectChanges()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemicalElementComponent ]
    })
    .compileComponents()
  })

  it('should create if atomic number is valid', () => {
    const maxAtomicNumber = 118
    for (let i = 1; i <= maxAtomicNumber; i++) {
      createComponent(i)
      expect(component).toBeTruthy()
    }
  })

  it('should throw error if atomic number is invalid', () => {
    const invalidAtomicNumbers: any[] = [undefined, true, 'error', NaN, Infinity, -10, 0, 119, 1000]
    for (const number of invalidAtomicNumbers) {
      const error = new AtomicNumberError(number)
      expect(() => createComponent(number)).toThrow(error)
    }
  })
})