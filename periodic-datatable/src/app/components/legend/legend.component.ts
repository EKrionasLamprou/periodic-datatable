import { Component } from '@angular/core'
import { Mode } from 'src/app/enums/mode.enum'
import { LegendItem } from 'src/app/models/legend-item.model'
import { ModeService } from 'src/app/services/mode.service'

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.sass']
})
export class LegendComponent {

  constructor(private modeService: ModeService) {
    this.items = this.getItems()
    modeService.subscribe(this, () => this.items = this.getItems())
  }

  items!: string[]

  public hasContent = (): boolean => this.items.length > 0

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