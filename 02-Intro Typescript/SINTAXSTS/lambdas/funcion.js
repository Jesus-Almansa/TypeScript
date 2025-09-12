"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcion = void 0;
var Funcion = /** @class */ (function () {
    function Funcion(inferior, superior, incremento, formula) {
        this.coordenadas = [];
        for (var x = inferior; x <= superior; x += incremento) {
            var y = formula(x);
            this.coordenadas.push([x, y]);
        }
    }
    Object.defineProperty(Funcion.prototype, "puntos", {
        get: function () {
            return this.coordenadas;
        },
        enumerable: false,
        configurable: true
    });
    return Funcion;
}());
exports.Funcion = Funcion;
function prueba() {
    var parabola = new Funcion(-5, 5, 1, function (x) { return x * x + 8; });
    for (var _i = 0, _a = parabola.puntos; _i < _a.length; _i++) {
        var p = _a[_i];
        console.log("(".concat(p[0], ", ").concat(p[1], ")"));
    }
    console.log("Onda");
    var onda = new Funcion(-5, 5, 1, function (x) { return x * Math.cos(x / 4); });
    for (var _b = 0, _c = onda.puntos; _b < _c.length; _b++) {
        var p = _c[_b];
        console.log("(".concat(p[0], ", ").concat(p[1], ")"));
    }
}
prueba();
