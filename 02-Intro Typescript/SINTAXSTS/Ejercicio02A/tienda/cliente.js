"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var persona_1 = require("./persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(id, nombre, apellido, telefono) {
        var _this = _super.call(this, id, nombre, apellido) || this;
        _this.id = id;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.telefono = telefono;
        return _this;
    }
    Cliente.prototype.ver = function () {
        return _super.prototype.ver.call(this) + ',' + this.telefono;
    };
    return Cliente;
}(persona_1.Persona));
exports.Cliente = Cliente;
