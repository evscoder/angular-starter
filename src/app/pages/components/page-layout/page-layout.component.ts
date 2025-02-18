import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent implements AfterViewInit {
  @ViewChild('pageWrapper', { static: true }) pageWrapper!: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.pageWrapper.nativeElement, 'opacity', '1');
  }
}
