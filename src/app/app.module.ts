import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideNgxMask} from "ngx-mask";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [provideNgxMask()],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
