import { TestBed } from '@angular/core/testing';

import { ChemicalElementService } from './chemical-element.service';

describe('ChemicalElementService', () => {
  let service: ChemicalElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChemicalElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
