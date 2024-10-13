import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import {UiIconComponent} from "../../ui-icon/ui-icon.component";
import {SimplebarAngularModule} from "simplebar-angular";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-modal-single',
  standalone: true,
  imports: [
    UiIconComponent,
    SimplebarAngularModule,
    CommonModule
  ],
  templateUrl: './modal-single.component.html',
  styleUrl: '../modal.component.scss'
})
export class ModalSingleComponent {
  @Input() title?: string;
  @Input() active = false;
  @Input() classes: string = '';
  @Output() closeModal = new EventEmitter<void>();

  isActive = false;
  isAnimate = false;

  constructor() {}

  ngOnInit() {
    this.updateModalState();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['active']) {
      this.updateModalState();
    }
  }

  private updateModalState() {
    if (this.active) {
      this.isActive = true;

      setTimeout(() => {
        this.isAnimate = true;
      }, 310);
    }
  }

  onClose() {
    this.active = false;
    this.isAnimate = false;

    setTimeout(() => {
      this.isActive = false;
      this.closeModal.emit();

      console.log('close');
    }, 310)
  }
}
