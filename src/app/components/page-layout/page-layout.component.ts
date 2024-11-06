import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent implements AfterViewInit {
  @ViewChild('pageWrapper', { static: true }) pageWrapper!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.pageWrapper.nativeElement, 'opacity', '1');
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.renderer.setStyle(this.pageWrapper.nativeElement, 'opacity', '1');
        }, 50);
      }
    });
  }
}
