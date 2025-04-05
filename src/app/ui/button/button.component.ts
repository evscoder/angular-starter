import {Component, Input, OnInit} from '@angular/core';
import {ButtonColor, ButtonSize, ButtonType} from "./button.interface";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: ButtonType = 'button';
  @Input() color: ButtonColor = 'primary';
  @Input() text: string = '';
  @Input() size?: ButtonSize = 'medium';
  @Input() title?: string;
  @Input() square: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
