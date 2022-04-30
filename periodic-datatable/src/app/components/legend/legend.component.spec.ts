import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Mode } from 'src/app/enums/mode.enum'
import { ModeService } from 'src/app/services/mode.service'
import { LegendComponent } from './legend.component'

describe('LegendComponent', () => {
  let component: LegendComponent
  let fixture: ComponentFixture<LegendComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendComponent ]
    })
    .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should get items and calculate if it has content', () => {
    const expectedItems = [
      [],                                           // 0 - Elements
      ['s-block', 'p-block', 'd-block', 'f-block'], // 1 - Blocks
      [],                                           // 2 - Groups
      [],                                           // 3 - Periods
      ['non-radioactive', 'radioactive'],           // 4 - Radioactive
      ['solid', 'liquid', 'vapour'],                // 5 - States
      ['nonmetal', 'metaloid', 'metal']             // 6 - Classification
    ]
    const len = expectedItems.length
    const service = TestBed.inject(ModeService)

    for (let i = 0; i < len; i++) {
      const expectedItem = expectedItems[i]
      const hasContent = expectedItem.length > 0
      
      service.setMode(i)
      expect(component['getItems']()).toEqual(expectedItem)
      expect(component.hasContent()).toEqual(hasContent)
    }
  })
})