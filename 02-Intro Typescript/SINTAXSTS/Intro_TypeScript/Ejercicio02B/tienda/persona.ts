export class Persona {
    constructor(public id:number, public nombre: string, public apellido:string){}
    ver() {
        return `${this.id}, ${this.nombre}, ${this.apellido}`
    }
}