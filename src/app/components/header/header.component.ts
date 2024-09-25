import { Component } from '@angular/core';
import {UiIconComponent} from "../ui-icon/ui-icon.component";
import {IconComponent} from "../icon/icon.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        UiIconComponent,
        IconComponent,
        CommonModule,
        RouterLink
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
