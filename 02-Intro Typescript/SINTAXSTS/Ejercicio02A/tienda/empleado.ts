import { Persona } from "./persona";

export class Empleado extends Persona{
    constructor(public id:number, public nombre: string, public apellido:string, public salario:number){
        super(id, nombre, apellido);
    }

    ver() {
        return super.ver() + ',' + this.salario;
    }
}