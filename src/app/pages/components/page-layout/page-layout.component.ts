import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../../components/header/header.component";
import {FooterComponent} from "../../../components/footer/footer.component";

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
  ],
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
