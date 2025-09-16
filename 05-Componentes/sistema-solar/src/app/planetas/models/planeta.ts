export interface Planeta {
    id:string,
    castellano:string,
    frances: string,
    ingles: string,
    lunas: string[],
    semiejeMayor: number,
    perihelio: number,
    afelio: number,
    excentricidad: number,
    inclinacion: number,
    masa: NumeroGrande,
    volumen:NumeroGrande,
    densidad: number,
    gravedad: number,
    radioMedio: number,
    tipo: TipoPlaneta,
    puntuacion:number
}

export interface NumeroGrande {
    valor:number,
    exponente:number;
}

export enum TipoPlaneta{
    PLANETA, PLANETA_ENANO
}