export class Producto {
    public precioInicial:number;

    constructor(
        public id:number,
        public nombre:string,
        public descripcion:string,
        public precio:number,
    ){
        this.precioInicial=precio;
    }
}