import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  @Input() name: string | undefined;
  @Input() src: string | undefined;

  public get source(): string {
    return this.src || `${this.name}`;
  }

  constructor() { }
}
