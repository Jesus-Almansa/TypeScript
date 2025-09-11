import { Figura } from "./figuras";
import { Punto } from "./punto";

export class Poligono implements Figura {
  constructor(private vertices: Punto[]) {}

  dibujar(): string {
    return this.vertices.map(v => v.dibujar()).join(" - ");
  }

  longitud(): number {
    let perimetro = 0;
    for (let i = 0; i < this.vertices.length; i++) {
      const actual = this.vertices[i];
      const siguiente = this.vertices[(i + 1) % this.vertices.length]; // conecta con el primero al final
      perimetro += actual.distancia(siguiente);
    }
    return perimetro;
  }
}