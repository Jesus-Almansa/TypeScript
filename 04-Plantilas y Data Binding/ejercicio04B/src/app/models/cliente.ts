export type TipoCliente='A' | 'B' | 'C';

export class Cliente {
    constructor(
        public id:number,
        public nombre:string,
        public apellidoUno:string,
        public apellidoDos:string,
        public gastoMedio:number,
        public tipo:TipoCliente
    ){}
}
