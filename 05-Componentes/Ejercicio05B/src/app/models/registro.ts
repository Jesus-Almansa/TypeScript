import { Estado } from "../calculadora/logica";

export class Registro {
    constructor(
        public identificador:string,
        public operandoUno:number,
        public operandoDos:number,
        public operacion:string,
        public estado:Estado
    ){}
}