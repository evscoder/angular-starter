import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ui-icon',
  standalone: true,
  templateUrl: './ui-icon.component.html',
  styleUrl: './ui-icon.component.scss'
})
export class UiIconComponent implements OnInit {
  @Input() name: string = '';
  @Input() width: string = '';
  @Input() height: string = '';

  ngOnInit() {
  }
}
