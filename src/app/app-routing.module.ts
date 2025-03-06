import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PageLayoutComponent} from "./pages/components/page-layout/page-layout.component";

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
        initialNavigation: 'enabledBlocking'
      }
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

