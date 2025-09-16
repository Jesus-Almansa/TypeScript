import { Injectable, inject } from '@angular/core';
import { ServicioTresService } from './servicio-tres.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioDosService {

  constructor(private servicioTres: ServicioTresService) { }

  operacionesDos() {
    return this.servicioTres.operacionesTres() + " Servicio Dos.";
  }
}
