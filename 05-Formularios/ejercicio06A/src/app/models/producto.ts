export class Producto {
    constructor(
        public referencia:string | null,
        public nombre:string | null,
        public precio:number | null,
        public fechaAlta:string | null
    ){}
}