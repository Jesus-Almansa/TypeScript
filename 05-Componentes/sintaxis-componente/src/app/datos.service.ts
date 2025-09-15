import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private contador:number;

  private static vecesQueHaSidoCreado=0;

  constructor() {
    DatosService.vecesQueHaSidoCreado++;
    console.log(`El FW ha creado un objeto de tipo DatosService (${DatosService.vecesQueHaSidoCreado})`);
    this.contador=0;
  }

  aumentarValor() {
    this.contador++;
  }

  getContador() {
    return this.contador;
  }
}
