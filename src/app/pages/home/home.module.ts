import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {PagesModule} from "../pages.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    PagesModule
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
