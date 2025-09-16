import { Component, OnInit, inject } from '@angular/core';
import { PantallaComponent } from '../pantalla/pantalla';
import { TecladoComponent } from '../teclado/teclado';
import { Estado, LogicaService } from '../logica';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [PantallaComponent, TecladoComponent],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
  providers:[LogicaService]
})
export class Calculadora implements OnInit {
  
  textoPantalla='';
  private logica=inject(LogicaService);

  ngOnInit(): void {
    this.textoPantalla=this.decidirTexto();
  }

  teclaPulsada(tecla:string) {
    this.logica.decidirAcción(tecla);
    this.textoPantalla=this.decidirTexto();
  }

  /* Puedo usar la función directamente en la plantilla, pero como no lo solemos hacer
  he decicido crear el campo "texto" a pesar de todo. */
  decidirTexto() {
    switch(this.logica.getEstado()) {
      case Estado.OPERANDOUNO: 
        return this.logica.getOperandoUno().toString();
      case Estado.OPERANDODOS: 
        return `${this.logica.getOperandoUno()} ${this.logica.getOperacion()} ${this.logica.getOperandoDos()}`;
      case Estado.RESULTADO: 
        return this.logica.getOperandoUno().toString();
      default: 
        //se supone que esto no puede pasar
        return "Error en la lógica del servicio";
    }
  }

}