import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [
  ],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss'
})
export class PageContentComponent implements AfterViewInit {
  @ViewChild('pageContent', { static: true }) pageContent!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.pageContent.nativeElement, 'opacity', '1');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.renderer.setStyle(this.pageContent.nativeElement, 'opacity', '1');
        }, 50);
      }
    });
  }
}
