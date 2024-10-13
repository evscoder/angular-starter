import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ClickOutsideDirective} from "../directives/click-outside.directive";

@NgModule({
  imports: [
    ClickOutsideDirective,
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ClickOutsideDirective,
  ]
})
export class SharedModule {}
