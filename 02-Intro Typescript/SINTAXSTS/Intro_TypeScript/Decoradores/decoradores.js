"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.ver = function () {
        console.log("Persona ".concat(this.nombre, ", ").concat(this.apellido, ", ").concat(this.edad, " a\u00F1os "));
    };
    return Persona;
}());
exports.Persona = Persona;
