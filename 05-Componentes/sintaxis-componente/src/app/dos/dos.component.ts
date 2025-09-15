import { Component } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-dos',
  standalone: true,
  imports: [],
  templateUrl: './dos.component.html',
  styleUrl: './dos.component.css'
})
export class DosComponent {
  elValor!:number;

  constructor(private datos:DatosService){}

  ngOnInit() {
    this.elValor=this.datos.getContador();
  }

  incrementar() {
    this.datos.aumentarValor();
    this.elValor=this.datos.getContador();
  }
}
