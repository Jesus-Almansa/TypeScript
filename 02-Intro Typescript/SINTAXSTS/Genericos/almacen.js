"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Almacen = void 0;
var Almacen = /** @class */ (function () {
    function Almacen() {
        this.datos = [];
    }
    Almacen.prototype.add = function (elemento) {
        if (this.datos.indexOf(elemento) != -1)
            return false;
        this.datos.push(elemento);
        return true;
    };
    Almacen.prototype.remove = function (elemento) {
        var posicion = this.datos.indexOf(elemento);
        if (posicion == 1)
            return false;
        this.datos.splice(posicion, 1);
        return true;
    };
    Object.defineProperty(Almacen.prototype, "lista", {
        get: function () {
            return this.datos;
        },
        enumerable: false,
        configurable: true
    });
    return Almacen;
}());
exports.Almacen = Almacen;
