export class Comida {
    constructor(
        public id:number | null = null,
        public nombre:string | null,
        public calorias:number | null,
        public grasa:number | null,
        public carbohidratos:number | null,
        public proteina:number | null,
        public referencia:string = nombre || ''
    ){}
}