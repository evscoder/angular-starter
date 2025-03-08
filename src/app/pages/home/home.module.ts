import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {PagesModule} from "../pages.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    PagesModule,
    RouterModule.forChild(routes)
  ],
  exports: [
  ],
})
export class HomeModule { }
