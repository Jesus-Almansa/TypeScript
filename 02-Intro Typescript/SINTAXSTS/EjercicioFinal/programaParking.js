"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parking_1 = require("./parking");
function prueba() {
    var garaje = new parking_1.Garaje(15);
    var blanco = new parking_1.Vehiculo('1111-KKK', 'coche blanco');
    var rojo = new parking_1.Vehiculo('2222-KKK', 'coche rojo');
    garaje.aparcar(blanco, 3);
    garaje.desaparcar(4);
    garaje.aparcar(rojo, 7);
    garaje.desaparcar(3);
    garaje.desaparcar(6);
    console.log("Estado del parking:");
    garaje.verEnConsolaPlazasLibres();
    console.log("\nMatrículas en el parking:");
    garaje.verEnConsolaCoches();
}
prueba();
