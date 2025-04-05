import {Component} from '@angular/core';
import {HomeInterface} from "./home.types";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  data?: HomeInterface | null = null;
}
