import { Figura } from "./figuras";
import { Punto } from "./punto";

export class SegmentoLinea implements Figura{
    // inicio:Punto;
    // fin:Punto;

    // constructor(inicio:Punto, fin:Punto){
    //     this.inicio=inicio;
    //     this.fin=fin;
    // }

    constructor(public inicio:Punto, public fin:Punto) {}

    dibujar() {
        return this.inicio.dibujar() + "----"  + this.fin.dibujar();
    }

    longitud() {
        return this.inicio.distancia(this.fin);
    }
}