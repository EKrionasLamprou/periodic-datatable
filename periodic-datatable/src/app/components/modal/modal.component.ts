import { Component, HostListener, OnInit } from '@angular/core'
import { ModalInformation } from 'src/app/models/modal-information.model'
import { ModalService } from 'src/app/services/modal.service'
import { ModalComponentDoc } from './modal.component.doc'

/**
 * Represents a modal that shows chemical element information.
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent
  implements OnInit, ModalComponentDoc {
  constructor(private modalService: ModalService) {
  }
  ngOnInit(): void {
    this.modalService.connectComponent(this)
  }

  public isVisible = false
  public info!: ModalInformation | null
  public hasImage = true

  public open = (info: ModalInformation): void => {
    this.info = info
    this.hasImage = !!info.getImageUrl
    
    if (this.info.hasInfo()) {
      this.isVisible = true
    }
  }

  public close = (): void => {
    this.isVisible = false
  }
  
  @HostListener('document:keyup', ['$event'])
  handleCloseKeyEvent = (event: KeyboardEvent): void => {
    if(event.key === 'Escape') {
      this.close()
    }
  }
}