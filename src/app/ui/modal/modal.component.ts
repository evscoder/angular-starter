import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, TemplateRef,
} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() title: string = '';
  @Input() attributes: string = '';
  @Input() content!: TemplateRef<any>;
  @Input() active = false;
  @Output() closeModal = new EventEmitter<void>();

  isActive = false;
  isAnimate = false;

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

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
        this.cdr.detectChanges();
      }, 310);
    }
  }

  onClose() {
    this.isAnimate = false;
    this.cdr.detectChanges();

    setTimeout(() => {
      this.isActive = false;
      this.closeModal.emit();
      this.cdr.detectChanges();
      this.elementRef.nativeElement.remove();
    }, 310)
  }
}
