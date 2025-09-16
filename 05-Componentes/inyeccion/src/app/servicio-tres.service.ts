import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioTresService {

  constructor() { }

  operacionesTres() {
    return "Servicio Tres.";
  }
}
