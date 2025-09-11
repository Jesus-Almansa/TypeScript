"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var almacen_1 = require("./almacen");
function prueba() {
    // let almacen:Almacen<string>=new Almacen<string>();
    var almacen = new almacen_1.Almacen();
    almacen.add("uno");
    almacen.add("dos");
    almacen.add("tres");
    // No compila almacen.add(6969)
    console.log("Añado cuatro: " + almacen.add("cuatro"));
    console.log("Añado dos: " + almacen.add("dos"));
    console.log("Añado uno: " + almacen.remove("uno"));
    console.log("Añado seis: " + almacen.remove("seis"));
    console.log("Resultao");
    for (var _i = 0, _a = almacen.lista; _i < _a.length; _i++) {
        var valor = _a[_i];
        console.log("-------->" + valor);
    }
    var numeros = new almacen_1.Almacen();
    numeros.add(4545);
    numeros.add(3939);
    numeros.add(1);
    // no compila numeros.add("bona tarda")
    var total = 0;
    for (var _b = 0, _c = numeros.lista; _b < _c.length; _b++) {
        var valor = _c[_b];
        total += valor;
    }
    console.log("El total es " + total);
}
prueba();
