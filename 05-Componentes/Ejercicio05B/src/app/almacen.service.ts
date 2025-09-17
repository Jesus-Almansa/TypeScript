import { Injectable } from '@angular/core';
import { Registro } from './models/registro';
import { Estado } from './calculadora/logica';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  private lista:Registro[] = [];

  getLista() {
    return this.lista;
  }

  getCalculadora(identificador:string){
    return this.lista.find(c=>c.identificador === identificador)
  }  

  pushCalculadora(identificador:string, operandoUno:number, operandoDos:number,operacion:string, estado:Estado) {
    let newCalculator:Registro = new Registro(identificador, operandoUno, operandoDos,operacion, estado);
    let index = this.lista.findIndex(c=>c.identificador === identificador);
    if (index == -1) this.lista.push(newCalculator) ;
    else this.lista[index] = newCalculator; 
  }
}
