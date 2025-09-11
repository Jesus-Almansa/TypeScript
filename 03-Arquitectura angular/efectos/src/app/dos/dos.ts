import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dos',
  imports: [CommonModule],
  templateUrl: './dos.html',
  styleUrl: './dos.css'
})
export class Dos {
  usarEstilo=[false,false,false];

  aplicar(indice:number) {
    this.usarEstilo[indice]=!this.usarEstilo[indice];
  }
}