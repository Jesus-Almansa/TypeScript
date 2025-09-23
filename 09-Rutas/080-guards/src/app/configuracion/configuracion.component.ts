import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { DatosServidorService } from '../datos-servidor.service';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent implements OnInit{

  //No uso los valores iniciales para nada, pero es que escribirlo "bien" da un poco de pereza:
  //primero!:WritableSignal<boolean>;
  //segundo!:WritableSignal<boolean>;
  primero=signal(true);
  segundo=signal(true);

  private datos=inject(DatosServidorService);

  ngOnInit(): void {
    this.primero.set(this.datos.getAccesoPrimero());
    this.segundo.set(this.datos.getAccesoSegundo());
  }

  cambiarPrimero() {
    this.primero.update(valor=>!valor);
    this.datos.setAccesoPrimero(this.primero());
  }
  
  cambiarSegundo() {
    this.segundo.update(valor=>!valor);
    this.datos.setAccesoSegundo(this.segundo());
  }
}
