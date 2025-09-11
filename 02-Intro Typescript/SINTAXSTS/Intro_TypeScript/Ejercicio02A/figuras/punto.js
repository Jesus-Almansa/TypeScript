"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.dibujar = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Punto.prototype.longitud = function () {
        return 0;
    };
    Punto.prototype.distancia = function (otro) {
        return Math.sqrt(Math.pow(this.x - otro.x, 2) +
            Math.pow(this.y - otro.y, 2));
    };
    return Punto;
}());
exports.Punto = Punto;
