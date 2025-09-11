import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dos.component.html',
  styleUrl: './dos.component.css'
})
export class DosComponent {
  usarEstilo=[false, false, false];

  aplicar(indice:number) {
    this.usarEstilo[indice]=!this.usarEstilo[indice];
  }
}
