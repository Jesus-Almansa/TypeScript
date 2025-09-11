import { Persona } from "./persona";

export class Cliente extends Persona{
    constructor(public id:number, public nombre: string, public apellido:string, public telefono:string){
        super(id, nombre, apellido);
    }

    ver() {
        return super.ver() + ',' + this.telefono;
    }
}