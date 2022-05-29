import { ModalInformation } from 'src/app/models/modal-information.model'
import { ModalComponent } from './modal.component';

/**
 * Documentation interface for the {@link ModalComponent}.
 */
export interface ModalComponentDoc {
  /** True if this modal should render. */
  isVisible: boolean,

  /** The information that will appear on the modal. */
  info: ModalInformation | null,

  /** True if this modal has any image to render. */
  hasImage: boolean,

  /**
   * Shows the modal.
   */
  open(info: ModalInformation): void,

  /**
   * Hides the modal.
   */
  close(): void,
}