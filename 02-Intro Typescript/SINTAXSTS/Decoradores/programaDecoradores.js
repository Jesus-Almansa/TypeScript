"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var decoradores_1 = require("./decoradores");
function prueba() {
    var joker = new decoradores_1.Persona("Rem", "Amamiya", 17);
    var gold = new decoradores_1.Persona("Gol", "D.Roger", 40);
    joker.ver();
    gold.ver();
}
prueba();
