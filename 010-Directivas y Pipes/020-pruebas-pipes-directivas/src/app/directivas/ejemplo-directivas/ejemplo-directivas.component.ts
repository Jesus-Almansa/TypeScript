import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ejemplo-directivas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejemplo-directivas.component.html',
  styleUrl: './ejemplo-directivas.component.css'
})
export class EjemploDirectivasComponent {
  e1=signal(false);
  e2=signal(false);

  negrita:'bold' | 'normal'='normal'; 
  cursiva:'italic' | 'normal'='normal';
  subrayado: 'underline' | 'none'='none';

  campoNombre='';

  cambiarUno() {
    this.e1.update(v=>!v);
  }
  cambiarDos() {
    this.e2.update(v=>!v);
  }

  cambiarNegrita() {
    if (this.negrita=='normal') this.negrita='bold';
    else this.negrita='normal';
  }

  cambiarCursiva() {
    if (this.cursiva=='normal') this.cursiva='italic';
    else this.cursiva='normal';
  }
  cambiarSubrayado() {
    if (this.subrayado=='none') this.subrayado='underline';
    else this.subrayado='none';
  }
}
