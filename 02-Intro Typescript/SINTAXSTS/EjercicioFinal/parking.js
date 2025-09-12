"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garaje = exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(matricula, color) {
        this.matricula = matricula;
        this.color = color;
    }
    Vehiculo.prototype.ver = function () {
        return "".concat(this.matricula, ", ").concat(this.color);
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var Garaje = /** @class */ (function () {
    function Garaje(numeroPlazas) {
        this.plazas = new Array(numeroPlazas);
        for (var i = 0; i < numeroPlazas; i++) {
            this.plazas[i] = null;
        }
    }
    Garaje.prototype.aparcar = function (vehiculo, plaza) {
        if (this.plazas[plaza] === null) {
            this.plazas[plaza] = vehiculo;
            console.log("Veh\u00EDculo ".concat(this.plazas[plaza].ver(), " aparcado en la plaza ").concat(plaza));
        }
        else {
            console.log("Esta plaza está ocupada");
        }
    };
    Garaje.prototype.desaparcar = function (plaza) {
        var _a;
        if (this.plazas[plaza] != null) {
            console.log("Vaciando plaza ".concat(plaza, " de veh\u00EDculo: ").concat((_a = this.plazas[plaza]) === null || _a === void 0 ? void 0 : _a.ver()));
            this.plazas[plaza] = null;
        }
        else {
            console.log("En la plaza ".concat(plaza, " no hay coche"));
        }
    };
    // Dibuja X si la plaza está ocupada, vacío si no
    Garaje.prototype.verEnConsolaPlazasLibres = function (columnas) {
        if (columnas === void 0) { columnas = 5; }
        var filas = Math.ceil(this.plazas.length / columnas);
        for (var fila = 0; fila < filas; fila++) {
            var indices = "";
            var ocupacion = "";
            for (var col = 0; col < columnas; col++) {
                var idx = fila * columnas + col;
                if (idx < this.plazas.length) {
                    // simula padStart sin usarlo
                    var numStr = "0" + (idx + 1);
                    numStr = numStr.slice(-2);
                    indices += numStr + "  ";
                    ocupacion += (this.plazas[idx] ? "X" : " ") + "   ";
                }
            }
            console.log(indices);
            console.log(ocupacion);
        }
    };
    // Muestra matrículas, "..." si no hay coche
    Garaje.prototype.verEnConsolaCoches = function (columnas) {
        if (columnas === void 0) { columnas = 5; }
        var filas = Math.ceil(this.plazas.length / columnas);
        for (var fila = 0; fila < filas; fila++) {
            var indices = "";
            var matriculas = "";
            for (var col = 0; col < columnas; col++) {
                var idx = fila * columnas + col;
                if (idx < this.plazas.length) {
                    var numStr = "0" + (idx + 1);
                    numStr = numStr.slice(-2);
                    indices += numStr + "  ";
                    matriculas += (this.plazas[idx] ? this.plazas[idx].matricula : "...") + " ";
                }
            }
            console.log(indices);
            console.log(matriculas);
        }
    };
    return Garaje;
}());
exports.Garaje = Garaje;
