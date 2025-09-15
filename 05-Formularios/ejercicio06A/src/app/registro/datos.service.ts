import { Injectable } from '@angular/core';
import { Registro } from './models/registro';

@Injectable()
export class DatosService {
  private lista:Registro[];

  constructor() { 
    this.lista=[];
  }

  addRegistro(r:Registro):boolean {
    if (this.lista.findIndex(e=>e.id==r.id)!=-1) return false;

    //Pegas de jugar con servidores simulados... en el array se almacenan referencias, cuidado.
    this.lista.push(new Registro(r.id,r.nombre,r.apellidos,r.correo,r.fecha,r.salario,r.tipo));
    return true;
  }

  getLista() {
    return this.lista;
  }
}
