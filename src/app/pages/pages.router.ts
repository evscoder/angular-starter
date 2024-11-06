import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {PageLayoutComponent} from "./components/page-layout/page-layout.component";

export const pagesRouter: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  }
];
