import { TestBed } from '@angular/core/testing'
import { ElementSelector } from './element-selector.service'

describe('ElementSelectorService', () => {
  let service: ElementSelector

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementSelector)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})