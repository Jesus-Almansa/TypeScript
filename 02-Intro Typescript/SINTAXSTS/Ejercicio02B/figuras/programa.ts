import { Figura } from "./figuras";
import { Punto } from "./punto";
import { SegmentoLinea } from "./segmentoLinea";

function pruebasGenerales(){
    const p1 = new Punto(10,20);
    const p2 = new Punto(20,30);

    verFigura("P1", p1);
    verFigura("P2", p2);
    console.log("La distancia de P1 a P2 es " + p1.distancia(p2));

    const sl1=new SegmentoLinea(new Punto(1,2), new Punto(4,5));
    console.log("SL1 es " + sl1.dibujar());
    console.log("La longitud de SL1 es " + sl1.longitud());
}

function verFigura(texto:string, eso:Figura){
    console.log(texto + " es " + eso.dibujar());
    console.log(texto + " mide " + eso.longitud());

}

pruebasGenerales();