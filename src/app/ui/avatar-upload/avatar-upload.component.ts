import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DragDropDirective} from "../../directives/drag-drop/drag-drop.directive";

@Component({
  selector: 'app-avatar-upload',
  standalone: true,
  imports: [DragDropDirective, CommonModule],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss'
})
export class AvatarUploadComponent {
  avatarSrc?: string | ArrayBuffer | null = null ;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.readFile(input.files[0]);
    }
  }

  onFileDropped(file: File): void {
    this.readFile(file);
  }

  private readFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.avatarSrc = e.target?.result;
    };
    reader.readAsDataURL(file);
  }
}
