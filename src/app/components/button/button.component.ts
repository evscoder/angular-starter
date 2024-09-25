import { Component, OnInit } from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  standalone: true,
  selector: 'app-button',
  imports: [MatButton],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
