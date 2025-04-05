import {Component, Input} from '@angular/core';
import {ButtonColor, ButtonSize, ButtonType} from "../button.interface";

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrl: '../button.component.scss'
})
export class ButtonLinkComponent {
  @Input() type: ButtonType = 'button';
  @Input() color: ButtonColor = 'primary';
  @Input() text: string = '';
  @Input() href?: string;
  @Input() size?: ButtonSize = 'medium';
  @Input() title?: string;
  @Input() square: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
}
