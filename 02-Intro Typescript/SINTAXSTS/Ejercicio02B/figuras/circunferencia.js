"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circunferencia = void 0;
var Circunferencia = /** @class */ (function () {
    function Circunferencia(centro, radio) {
        this.centro = centro;
        this.radio = radio;
    }
    Circunferencia.prototype.dibujar = function () {
        return "(".concat(this.centro.dibujar(), "), (").concat(this.radio, ")");
    };
    Circunferencia.prototype.longitud = function () {
        return 2 * Math.PI * this.radio;
    };
    return Circunferencia;
}());
exports.Circunferencia = Circunferencia;
