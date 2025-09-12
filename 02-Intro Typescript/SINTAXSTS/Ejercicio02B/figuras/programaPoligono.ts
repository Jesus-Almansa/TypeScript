import { Figura } from "./figuras";
import { Poligono } from "./poligono";
import { Punto } from "./punto";

function pruebaPoligono(){
    const pol1=new Poligono([
        new Punto(10,20),
        new Punto(40,20),
        new Punto(60,30),
        new Punto(40,50),
        new Punto(10,30),
    ])

    verFigura("POL1", pol1)
}

function verFigura(texto: string, figura: Figura) {
  console.log(texto + " es " + figura.dibujar());
  console.log(texto + " mide " + figura.longitud());
}

pruebaPoligono();