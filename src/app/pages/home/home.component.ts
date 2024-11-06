import { Component } from '@angular/core';
import {MatDialogContainer} from "@angular/material/dialog";
import {MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatToolbar} from "@angular/material/toolbar";
import {PageLayoutComponent} from "../../components/page-layout/page-layout.component";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent,
        MatDialogContainer,
        MatExpansionPanelTitle,
        MatToolbar,
        PageLayoutComponent,
        PageLayoutComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
