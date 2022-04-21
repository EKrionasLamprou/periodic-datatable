import { Component, OnInit } from '@angular/core'
import { ModeService } from 'src/app/services/mode.service'

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.sass']
})
export class ControlPanelComponent implements OnInit {

  constructor(private modeService: ModeService) {
  }

  ngOnInit(): void {
  }

  public onModeChange(mode: number) {
    this.modeService.setMode(mode)
  }
}