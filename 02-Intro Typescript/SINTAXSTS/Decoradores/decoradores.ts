export class Persona {
    constructor(public nombre:string, public apellido:string, public edad:number) {}

    ver() {
        console.log(`Persona ${this.nombre}, ${this.apellido}, ${this.edad} años `)
    }
}