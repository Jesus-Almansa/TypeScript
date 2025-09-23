import { Injectable } from '@angular/core';

@Injectable()
export class DatosServidorService {
  /* En un caso real me conectaría a un servidor con HttpClient, y en función de la cookie o el token que el cliente
  le enviara el servidor me respondería con los "trues" o "falses" adecuados; pero para eso necesito un servidor.*/

  /* Y por supuesto todas las operaciones sería ASÍNCRONAS */

  private accesoPrimero:boolean;
  private accesoSegundo:boolean;

  private desbloquearSalida:boolean;

  constructor() {
    this.accesoPrimero=true;
    this.accesoSegundo=true;
    this.desbloquearSalida=true;
  }

  getAccesoPrimero() {
    return this.accesoPrimero;
  }

  setAccesoPrimero(valor:boolean) {
    this.accesoPrimero=valor;
  }

  getAccesoSegundo() {
    return this.accesoSegundo;
  }

  setAccesoSegundo(valor:boolean) {
    this.accesoSegundo=valor;
  }

  getDesbloquearSalida() {
    return this.desbloquearSalida;
  }

  setDesbloquearSalida(valor:boolean) {
    this.desbloquearSalida=valor;
  }

}
