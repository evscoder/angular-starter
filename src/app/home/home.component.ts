import { Component } from '@angular/core';
import {HeaderComponent} from "../components/header/header.component";
import {MatDialogContainer} from "@angular/material/dialog";
import {MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MatDialogContainer,
    MatExpansionPanelTitle,
    MatToolbar
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
