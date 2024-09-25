import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxMaskDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideNgxMask()]
})
export class AppComponent {
  title = 'registration-app';
}
