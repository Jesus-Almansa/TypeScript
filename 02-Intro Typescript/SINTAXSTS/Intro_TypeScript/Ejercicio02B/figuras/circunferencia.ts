import { Figura } from "./figuras";
import { Punto } from "./punto";

export class Circunferencia implements Figura{
    constructor(
        private centro: Punto,
        private radio: number
    ) {}

    dibujar(): string {
        return `(${this.centro.dibujar()}), (${this.radio})`;
    }
    longitud(): number {
        return 2 * Math.PI * this.radio;
    }
}