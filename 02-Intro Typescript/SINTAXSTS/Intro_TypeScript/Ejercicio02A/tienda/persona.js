"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Persona.prototype.ver = function () {
        return "".concat(this.id, ", ").concat(this.nombre, ", ").concat(this.apellido);
    };
    return Persona;
}());
exports.Persona = Persona;
