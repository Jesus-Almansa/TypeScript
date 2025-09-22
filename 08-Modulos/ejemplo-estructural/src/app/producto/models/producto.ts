export type Estado='A' |'B' |'C'

export class Producto {
    constructor(
        public id:number,
        public nombre:string,
        public precio:number,
        public estado:Estado
    ){}
}