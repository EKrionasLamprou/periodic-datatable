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
  constructor(
    private modalService: ModalService) {
  }
  ngOnInit(): void {
    // Connects this component to the modalService.
    this.modalService.connectComponent(this)
  }

  /** Determines wheter or not this modal should render. */
  public isVisible = false
  /** The information that will appear on the modal. */
  public info!: ModalInformation | null

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
    if(event.key === 'Escape')
    {
      this.close()
    }
  }
}