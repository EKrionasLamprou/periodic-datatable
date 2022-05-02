import { Injectable } from '@angular/core'
import { ModalComponent } from '../components/modal/modal.component'
import {
  BlockInformation,
  ElementInformation,
  GroupInformation,
  Information,
  PeriodInformation
} from 'src/app/models/information.model'
import { ElementSelector } from './element-selector.service'
import { ModeService } from './mode.service'
import { ChemicalElement } from '../models/chemical-element.model'
import { Mode } from '../enums/mode.enum'

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private elementSelector: ElementSelector,
    private modeService: ModeService) {
  }

  private component!: ModalComponent

  public connectComponent = (component: ModalComponent): void => {
    this.component = component
  }

  public open = () => {
    const element = this.elementSelector.selectedElement
    if (element) {
      this.component.info = this.getInfo(element)
      this.component.isVisible = true
    }
  }

  private getInfo = (element: ChemicalElement) : Information | null => {
    const mode = this.modeService.getMode()
    switch (mode) {
      case Mode.Blocks: return new BlockInformation(element)
      case Mode.Groups: return new GroupInformation(element)
      case Mode.Periods: return new PeriodInformation(element)
      default: return new ElementInformation(element)
    }
  }
}