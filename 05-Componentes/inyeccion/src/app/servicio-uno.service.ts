import { Injectable, inject } from '@angular/core';
import { ServicioTresService } from './servicio-tres.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioUnoService {

  private servicioTres=inject(ServicioTresService);

  constructor() { }

  operacionesUno() {
    return this.servicioTres.operacionesTres() + " Servicio Uno.";
  }
}
