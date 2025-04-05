import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {PagesModule} from "../pages.module";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../module/shared/shared.module";

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    PagesModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
  ],
})
export class HomeModule { }
