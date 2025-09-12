"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var poligono_1 = require("./poligono");
var punto_1 = require("./punto");
function pruebaPoligono() {
    var pol1 = new poligono_1.Poligono([
        new punto_1.Punto(10, 20),
        new punto_1.Punto(40, 20),
        new punto_1.Punto(60, 30),
        new punto_1.Punto(40, 50),
        new punto_1.Punto(10, 30),
    ]);
    verFigura("POL1", pol1);
}
function verFigura(texto, figura) {
    console.log(texto + " es " + figura.dibujar());
    console.log(texto + " mide " + figura.longitud());
}
pruebaPoligono();
