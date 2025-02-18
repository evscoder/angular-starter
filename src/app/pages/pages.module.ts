import { NgModule } from '@angular/core';
import {PageContentComponent} from "./components/page-content/page-content.component";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {PageLayoutComponent} from "./components/page-layout/page-layout.component";
import {SharedModule} from "../module/shared/shared.module";
import {RouterModule} from "@angular/router";
import {PagesRoutingModule} from "./pages-routing.module";
import {HomeComponent} from "./home/home.component";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    PageContentComponent,
    HeaderComponent,
    FooterComponent,
    PageLayoutComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    HomeModule,
    PagesRoutingModule
  ],
  exports: [
    PageContentComponent,
    HeaderComponent,
    FooterComponent,
    PageLayoutComponent
  ],
})
export class PagesModule { }
