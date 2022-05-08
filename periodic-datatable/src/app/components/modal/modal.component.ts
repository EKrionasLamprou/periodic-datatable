import { Component, HostListener, OnInit } from '@angular/core'
import { ModalInformation } from 'src/app/models/modal-information.model'
import { ModalService } from 'src/app/services/modal.service'

/**
 * Represents a modal that shows chemical element information.
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {
  }
  ngOnInit(): void {
    this.modalService.connectComponent(this)
  }

  /** Determines wheter or not this modal should render. */
  public isVisible = false
  /** The information that will appear on the modal. */
  public info!: ModalInformation | null

  /** Determines wheter or not this modal has any image to render. */
  public hasImage = true

  /**
   * Shows the modal.
   */
  public open = (info: ModalInformation) => {
    this.info = info
    this.hasImage = true
    this.isVisible = true
  }

  /**
   * Hides the modal.
   */
  public close = (): void => {
    this.isVisible = false
  }

  /**
   * Closes the modal on 'Escape' key press.
   */
  @HostListener('document:keyup', ['$event'])
  handleCloseKeyEvent = (event: KeyboardEvent): void => {
    if(event.key === 'Escape') {
      this.close()
    }
  }
}