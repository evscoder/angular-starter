import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss',
  animations: [
    trigger('fadeInAnimation', [
      state('visible', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.8s 0.3s ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class PageContentComponent {
}
