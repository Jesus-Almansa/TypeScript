"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentoLinea = void 0;
var SegmentoLinea = /** @class */ (function () {
    // inicio:Punto;
    // fin:Punto;
    // constructor(inicio:Punto, fin:Punto){
    //     this.inicio=inicio;
    //     this.fin=fin;
    // }
    function SegmentoLinea(inicio, fin) {
        this.inicio = inicio;
        this.fin = fin;
    }
    SegmentoLinea.prototype.dibujar = function () {
        return this.inicio.dibujar() + "----" + this.fin.dibujar();
    };
    SegmentoLinea.prototype.longitud = function () {
        return this.inicio.distancia(this.fin);
    };
    return SegmentoLinea;
}());
exports.SegmentoLinea = SegmentoLinea;
