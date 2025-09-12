"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var punto_1 = require("./punto");
var segmentoLinea_1 = require("./segmentoLinea");
function pruebasGenerales() {
    var p1 = new punto_1.Punto(10, 20);
    var p2 = new punto_1.Punto(20, 30);
    verFigura("P1", p1);
    verFigura("P2", p2);
    console.log("La distancia de P1 a P2 es " + p1.distancia(p2));
    var sl1 = new segmentoLinea_1.SegmentoLinea(new punto_1.Punto(1, 2), new punto_1.Punto(4, 5));
    console.log("SL1 es " + sl1.dibujar());
    console.log("La longitud de SL1 es " + sl1.longitud());
}
function verFigura(texto, eso) {
    console.log(texto + " es " + eso.dibujar());
    console.log(texto + " mide " + eso.longitud());
}
pruebasGenerales();
