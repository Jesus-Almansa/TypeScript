import { Component, OnInit, signal } from '@angular/core';
import { DatosService } from '../datos.service';
import { Valor } from '../modelo/valor';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-promesa',
  standalone: true,
  imports: [NgClass],
  templateUrl: './promesa.component.html',
  styleUrls: ['../estilos/estilos.css', './promesa.component.css']
})
export class PromesaComponent {

  lista=signal<Valor[]>([]);
  esperando=signal(false);
  error=signal(false);

  constructor(private datos:DatosService){}

  leer() {
    this.lista.set([]);
    this.esperando=signal(true);
    this.error=signal(false);

    this.datos.getListaPromesa()
      .then(datos=>{
        this.lista.set(datos);
        this.esperando=signal(false);
      })
      .catch(()=>{
        this.esperando=signal(false);
        this.error=signal(true);
      });
  }

  borrar() {
    this.lista.set([]);
    this.error=signal(false);
  }

}
