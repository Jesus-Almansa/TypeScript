"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classifier = void 0;
var Classifier = /** @class */ (function () {
    function Classifier() {
        this.nulos = 0;
        this.numeros = [];
        this.texto = [];
    }
    Classifier.prototype.clasificar = function (nuevaCosa) {
        if (nuevaCosa === null) {
            this.nulos++;
            return;
        }
        switch (typeof nuevaCosa) {
            case "number":
                this.numeros.push(nuevaCosa);
                break;
            case "string":
                this.texto.push(nuevaCosa);
                break;
        }
    };
    Classifier.prototype.getNumeros = function () {
        // for
        return this.numeros;
    };
    Classifier.prototype.getTexto = function () {
        return this.texto;
    };
    Classifier.prototype.getNulos = function () {
        return this.nulos;
    };
    return Classifier;
}());
exports.Classifier = Classifier;
