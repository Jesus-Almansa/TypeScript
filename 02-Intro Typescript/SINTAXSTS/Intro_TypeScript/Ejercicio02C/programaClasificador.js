"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clasificador_1 = require("./clasificador");
var cf = new clasificador_1.Classifier();
cf.clasificar(null);
cf.clasificar(3);
cf.clasificar(9999999999999);
cf.clasificar('hola mari carme tu hijo esta en el after awers');
cf.clasificar(null);
cf.clasificar("EPAAAAAAAAAAAAA");
cf.clasificar("jolou nait silson e un yota ere pe ge");
// Imprimir arrays completos
console.log("Valores numéricos procesados:", cf.getNumeros());
// Imprimir cada valor individual
cf.getNumeros().forEach(function (n) {
    console.log("Número procesado:", n);
});
console.log("Textos procesados:", cf.getTexto());
cf.getTexto().forEach(function (t) {
    console.log("Texto procesado:", t);
});
console.log("Valores nulos procesados:", cf.getNulos());
