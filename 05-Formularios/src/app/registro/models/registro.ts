export class Registro {
    constructor(
        public id:number | null,
        public nombre:string | null,
        public apellidos:string | null,
        public correo:string | null,
        public fecha:Date | null,
        public salario:number | null,
        public tipo:Tipo
    ){}
}

export enum Tipo {
    EXPERTISIMO = 'ME',
    EXPERTO='E', 
    MEDIO='M', 
    PRINCIPIANTE='P', 
    DESCONOCIDO='D',
    NOOB ='N'
}