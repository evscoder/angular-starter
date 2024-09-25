import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})

export class InputComponent implements OnInit {

  @Input() label: string | undefined;
  @Input() hasError: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
