import { NgModule } from '@angular/core';
import {PageContentComponent} from "./components/page-content/page-content.component";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {SharedModule} from "../module/shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    PageContentComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
  ],
  exports: [
    PageContentComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class PagesModule { }
