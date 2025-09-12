"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var persona_1 = require("./persona");
var cliente_1 = require("./cliente");
function prueba() {
    var c1 = new cliente_1.Cliente(10, 'Pedro', 'Pedrez', '99999999');
    var c2 = new cliente_1.Cliente(11, 'Balatro', 'Balatrez', '99999998');
    var e1 = new empleado_1.Empleado(100, 'Juan', 'Caballez', 50000);
    var e2 = new empleado_1.Empleado(101, 'Sexio', 'Moya', 10000);
    var p1 = new persona_1.Persona(1301, 'Rem', 'Amamiya');
    var p2 = new persona_1.Persona(2030, 'Makoto', 'Yuki');
    // ponerEnConsola("Cliente C1", c1);
    // ponerEnConsola("Cliente C2", c2);
    // ponerEnConsola("Empleado E1", e1);
    // ponerEnConsola("Empleado E2", e2);
    // ponerEnConsola("Persona P1", p1);
    // ponerEnConsola("Persona P2", p2);
    var nuevaPersona = c1;
    var nuevoCLiente = nuevaPersona;
    var otroCliente = p1;
    console.log("NC: " + nuevoCLiente.nombre + ", " + nuevoCLiente.telefono);
    console.log("OC: " + otroCliente.nombre + ", " + otroCliente.telefono);
    if (nuevoCLiente instanceof cliente_1.Cliente)
        console.log("NC se refiere a un Cliente");
    else
        console.log("NC no almacena un obketo de clase Cliente");
    if (otroCliente instanceof cliente_1.Cliente)
        console.log("OC se refiere a un Cliente");
    else
        console.log("OC no almacena un obketo de clase Cliente");
}
function ponerEnConsola(texto, persona) {
    console.log(texto + ": " + persona.ver());
}
prueba();
