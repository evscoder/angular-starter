import { NgModule } from '@angular/core';
import {ButtonComponent} from "../../ui/button/button.component";
import {IconComponent} from "../../ui/icon/icon.component";
import {ImageComponent} from "../../ui/image/image.component";
import {ModalSingleComponent} from "../../ui/modal/modal-single/modal-single.component";
import {SimplebarAngularModule} from "simplebar-angular";
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ButtonLinkComponent} from "../../ui/button/button-link/button-link.component";

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonLinkComponent,
    IconComponent,
    ImageComponent,
    ModalSingleComponent
  ],
  imports: [
    SimplebarAngularModule,
    NgIf,
    NgForOf,
    NgClass,
    RouterLink,
    NgSwitch,
    NgSwitchCase,
  ],
  exports: [
    ButtonComponent,
    ButtonLinkComponent,
    IconComponent,
    ImageComponent,
    ModalSingleComponent
  ],
})
export class SharedModule { }
