import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() name: string | undefined;
  @Input() src: string | undefined;

  public get source(): string {
    return this.src || `${this.name}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
