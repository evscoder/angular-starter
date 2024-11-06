import { Routes } from '@angular/router';
import {pagesRouter} from "./pages/pages.router";

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  ...pagesRouter
];
