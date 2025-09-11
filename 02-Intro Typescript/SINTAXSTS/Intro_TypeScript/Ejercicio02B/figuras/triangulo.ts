import { Figura } from "./figuras";
import { Punto } from "./punto";

export class Triangulo implements Figura {
  constructor(
    private A: Punto,
    private B: Punto,
    private C: Punto
  ) {}

  dibujar(): string {
    return `(${this.A.dibujar()}) - (${this.B.dibujar()}) - (${this.C.dibujar()})`;
  }

  longitud(): number {
    // perímetro = AB + BC + CA
    const AB = this.A.distancia(this.B);
    const BC = this.B.distancia(this.C);
    const CA = this.C.distancia(this.A);
    return AB + BC + CA;
  }
}