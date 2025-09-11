import { Component } from '@angular/core';

@Component({
  selector: 'app-uno',
  standalone: true,
  imports: [],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {
  estiloAplicado='estiloUno';
  estilos=['estiloUno','estiloDos','estiloTres'];
  indice=0;

  cambiar() {
    this.indice++;
    if (this.indice===this.estilos.length) this.indice=0;

    this.estiloAplicado=this.estilos[this.indice];
  }
}
