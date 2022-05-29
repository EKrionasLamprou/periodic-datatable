import { Component } from '@angular/core'
import { Mode } from 'src/app/enums/mode.enum'
import { ModeService } from 'src/app/services/mode.service'
import { LegendComponentDoc } from './legend.component.doc'

/**
 * Represents a visual explanation of the colours that are used to describe the elements.
 */
@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.sass']
})
export class LegendComponent implements LegendComponentDoc {
  constructor(private modeService: ModeService) {
    this.items = this.getItems()
    modeService.subscribe(this, () => this.items = this.getItems())
  }

  items!: string[]

  public hasContent = (): boolean => this.items.length > 0

  // Gets the items of this legend, based on the current mode.
  private getItems = (): string[] => {
    const mode: Mode = this.modeService.getMode()
    switch (mode) {
      case Mode.Blocks: return [
        's-block',
        'p-block',
        'd-block',
        'f-block',
      ]
      case Mode.Radioactive: return [
        'non-radioactive',
        'radioactive',
      ]
      case Mode.States: return [
        'solid',
        'liquid',
        'vapour',
      ]
      case Mode.Classification: return [
        'nonmetal',
        'metaloid',
        'metal',
      ]
      default: return []
    }
  }
}