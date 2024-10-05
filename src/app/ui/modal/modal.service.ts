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
  private currentModal?: ComponentRef<ModalComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(content: TemplateRef<any>, options?: { title?: string }) {
    const modalComponentFactory = this.resolver.resolveComponentFactory(ModalComponent);
    const modalComponent = modalComponentFactory.create(this.injector);

    modalComponent.instance.active = true;
    modalComponent.instance.title = options?.title || 'modal';
    modalComponent.instance.closeModal.subscribe(() => this.closeModal(modalComponent));
    modalComponent.instance.content = content;

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    this.modalNotifier = new Subject();
    this.currentModal = modalComponent;

    return this.modalNotifier?.asObservable();
  }

  closeModal(modalComponent: ComponentRef<ModalComponent>): void {
    modalComponent.instance.active = false;
    this.modalNotifier?.complete();
  }
}
