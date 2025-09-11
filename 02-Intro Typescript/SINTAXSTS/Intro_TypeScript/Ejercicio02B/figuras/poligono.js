"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poligono = void 0;
var Poligono = /** @class */ (function () {
    function Poligono(vertices) {
        this.vertices = vertices;
    }
    Poligono.prototype.dibujar = function () {
        return this.vertices.map(function (v) { return v.dibujar(); }).join(" - ");
    };
    Poligono.prototype.longitud = function () {
        var perimetro = 0;
        for (var i = 0; i < this.vertices.length; i++) {
            var actual = this.vertices[i];
            var siguiente = this.vertices[(i + 1) % this.vertices.length]; // conecta con el primero al final
            perimetro += actual.distancia(siguiente);
        }
        return perimetro;
    };
    return Poligono;
}());
exports.Poligono = Poligono;
