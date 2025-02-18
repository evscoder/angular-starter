import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PageLayoutComponent} from "./components/page-layout/page-layout.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule {}
