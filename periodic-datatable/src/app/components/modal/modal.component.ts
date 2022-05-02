import { Component, HostListener, OnInit } from '@angular/core'
import { Information } from 'src/app/models/information.model'
import { ModalService } from 'src/app/services/modal.service'

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

  public isVisible = false
  public info!: Information | null

  public close = () => this.isVisible = false

  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent = (event: KeyboardEvent): void => {
    if(event.key === 'Escape')
    {
      this.close()
    }
  }
}