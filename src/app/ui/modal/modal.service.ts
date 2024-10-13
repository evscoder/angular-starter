import { DOCUMENT } from '@angular/common';
import {
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
  ComponentRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { ModalComponent } from "./modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalNotifier?: Subject<string>;
  currentModal?: ComponentRef<ModalComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(content: TemplateRef<any>) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(ModalComponent);
    const modalComponent = modalComponentFactory.create(this.injector);

    modalComponent.instance.active = true;
    modalComponent.instance.content = content;
    modalComponent.hostView.detectChanges();
    this.document.body.appendChild(modalComponent.location.nativeElement);
    this.modalNotifier = new Subject();
    this.currentModal = modalComponent;

    return this.modalNotifier?.asObservable();
  }

  closeModal(): void {
    if (this.currentModal) {
      this.currentModal.instance.onClose();
    }
  }

  updateModal(content?: TemplateRef<any>): void {
    if (this.currentModal) {
      if (content) {
        this.currentModal.instance.content = content;
        this.currentModal.hostView.detectChanges();
      }
    }
  }
}
