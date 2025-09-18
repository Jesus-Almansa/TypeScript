import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { Valor } from '../modelo/valor';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [NgClass],
  templateUrl: './observable.component.html',
  styleUrls: ['../estilos/estilos.css', './observable.component.css']
})
export class ObservableComponent implements OnInit{

  lista=signal<Valor[]>([]);
  esperando=signal(false);
  error=signal(false);

  constructor(private datos:DatosService){}

  ngOnInit(): void {
    this.datos.getLista$().subscribe(datos=>{
      this.esperando=signal(false);
      if (datos==null) this.error.set(true);
      else this.lista.set(datos);
    });
  }

  leer() {
    this.lista.set([]);
    this.error.set(false);
    this.esperando.set(true);
    this.datos.getListaObservable();
  }

  borrar(){
    this.lista.set([]);
    this.error.set(false);
  }
}
