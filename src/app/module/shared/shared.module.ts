import { NgModule } from '@angular/core';
import {ButtonComponent} from "../../ui/button/button.component";
import {IconComponent} from "../../ui/icon/icon.component";
import {ImageComponent} from "../../ui/image/image.component";

@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    ImageComponent
  ],
  imports: [
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    ImageComponent
  ],
})
export class SharedModule { }
