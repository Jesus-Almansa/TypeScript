import { Component } from '@angular/core';

@Component({
  selector: 'app-uno',
  imports: [],
  templateUrl: './uno.html',
  styleUrl: './uno.css'
})

export class Uno {
  estiloAplicado='estiloUno';
  estilos=['estiloUno', 'estiloDos', 'estiloTres']
  indice=0;

  cambiar() {
    this.indice++;
    if (this.indice===this.estilos.length) {
      this.indice=0;
    }
    this.estiloAplicado=this.estilos[this.indice];
    // if (this.indice===this.estilos.length) this.indice=0;
    // this.estiloAplicado=this.estilos[this.indice];
  }
}