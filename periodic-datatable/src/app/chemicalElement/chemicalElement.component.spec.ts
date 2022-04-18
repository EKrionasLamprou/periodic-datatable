import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ChemicalElementComponent } from './chemicalElement.component'

describe('ElementComponent', () => {
  let component: ChemicalElementComponent;
  let fixture: ComponentFixture<ChemicalElementComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChemicalElementComponent ]
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChemicalElementComponent);
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy()
  });
});