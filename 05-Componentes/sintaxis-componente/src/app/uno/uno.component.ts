import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-uno',
  standalone: true,
  imports: [],
  template:
    `<h1>Componente dos</h1>
    <p>Este componente define todo <span class="especial">en el decorador</span></p>
    <p>No usa archivos adicionales para la plantilla ni para los estilos.</p>
    <p>Fíjate que he usado el caracter "acento grave" para definir los textos; es más cómodo para estas tareas porque permite
      el uso de "intros"</p>
      
      <p>
        <button (click)="incrementar()">Incrementar</button>
        Contador vale <span class="especial">{{elValor}}</span>
      </p>`,
  styles: 
    `.especial{
      background-color: #e0e0ff;
      font-style: italic;
    }
    
    p {
      margin-top:3em;
    }`,
    providers:[DatosService]
})
export class UnoComponent {
  elValor!:number;
  constructor(private datos:DatosService) {}

  ngOnInit() {
    this.elValor=this.datos.getContador();
  }

  incrementar() {
    this.datos.aumentarValor();
    this.elValor=this.datos.getContador();
  }
}
