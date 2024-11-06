import { Component } from '@angular/core';
import {MatDialogContainer} from "@angular/material/dialog";
import {MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatToolbar} from "@angular/material/toolbar";
import {HeaderComponent} from "../../components/header/header.component";
import {PageContentComponent} from "../components/page-content/page-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HeaderComponent,
        MatDialogContainer,
        MatExpansionPanelTitle,
        MatToolbar,
        PageContentComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
