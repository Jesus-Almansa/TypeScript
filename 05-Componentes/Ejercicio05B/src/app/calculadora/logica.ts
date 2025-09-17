import { Injectable } from '@angular/core';

export enum Estado {
  OPERANDOUNO, OPERANDODOS, RESULTADO
}

@Injectable()
export class LogicaService {
  private estado!:Estado;
  private operandoUno!:number;
  private operandoDos!:number;
  private operacion!:string;

  constructor() {
    this.iniciarTodo();
  }

  decidirAcción(tecla:string):void {
    if (tecla=='C') this.iniciarTodo();
    else if (this.estado==Estado.OPERANDOUNO) this.procesarOperandoUno(tecla);
    else if (this.estado==Estado.OPERANDODOS) this.procesarOperandoDos(tecla);
    else if (this.estado==Estado.RESULTADO)  {
        this.iniciarTodo();
        this.procesarOperandoUno(tecla);
    }
  }

  getOperandoUno() {
    return this.operandoUno;
  }

  getOperandoDos() {
    return this.operandoDos;
  }

  getOperacion() {
    return this.operacion;
  }

  getEstado() {
    return this.estado;
  }

  setOperandoUno(valor:number) {
    this.operandoUno=valor;
  }

  setOperandoDos(valor:number) {
    this.operandoDos=valor;
  }

  setOperacion(valor:string) {
    this.operacion=valor;
  }

  setEstado(valor:Estado) {
    this.estado=valor;
  }

  private iniciarTodo() {
    this.estado=Estado.OPERANDOUNO;
    this.operandoUno=0;
    this.operandoDos=0;
    this.operacion='';
  }

  private esNumero(tecla:string) {
    return tecla>='0' && tecla<='9';
  }

  private esOperacion(tecla:string) {
    if (tecla=='+') return true;
    if (tecla=='-') return true;
    if (tecla=='X') return true;
    if (tecla=='/') return true;
    return false;
  }


  private procesarOperandoDos(tecla: string): void {
    if (this.esNumero(tecla)) this.operandoDos=this.operandoDos*10 + Number.parseInt(tecla);
    else if (tecla=='=') {
      this.estado=Estado.RESULTADO;
      this.operandoUno=this.calcularResultado();
      this.operacion='';
      this.operandoDos=0;
    }
  }

  private procesarOperandoUno(tecla: string): void {
    if (this.esNumero(tecla)) this.operandoUno=this.operandoUno*10 + Number.parseInt(tecla);
    else if(this.esOperacion(tecla)) {
      this.operacion=tecla;
      this.estado=Estado.OPERANDODOS;
    }
  }

  private calcularResultado():number {
    if (this.operacion=='+') return this.operandoUno + this.operandoDos;
    if (this.operacion=='X') return this.operandoUno * this.operandoDos;
    if (this.operacion=='-') return this.operandoUno - this.operandoDos;
    else return Math.trunc(this.operandoUno / this.operandoDos);
  }

}