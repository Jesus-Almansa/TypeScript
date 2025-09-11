import { Empleado } from "./empleado";
import { Persona } from "./persona";
import { Cliente } from "./cliente";


function prueba() {
    const c1 = new Cliente(10, 'Pedro', 'Pedrez', '99999999');
    const c2 = new Cliente(11, 'Balatro', 'Balatrez', '99999998');

    const e1 = new Empleado(100, 'Juan', 'Caballez', 50000);
    const e2 = new Empleado(101, 'Sexio', 'Moya', 10000);

    const p1 = new Persona(1301, 'Rem', 'Amamiya');
    const p2 = new Persona(2030, 'Makoto', 'Yuki');

    // ponerEnConsola("Cliente C1", c1);
    // ponerEnConsola("Cliente C2", c2);
    // ponerEnConsola("Empleado E1", e1);
    // ponerEnConsola("Empleado E2", e2);
    // ponerEnConsola("Persona P1", p1);
    // ponerEnConsola("Persona P2", p2);

    let nuevaPersona:Persona=c1;

    let nuevoCLiente:Cliente=nuevaPersona as Cliente;
    let otroCliente:Cliente=p1 as Cliente;

    console.log("NC: " + nuevoCLiente.nombre + ", " + nuevoCLiente.telefono)
    console.log("OC: " + otroCliente.nombre + ", " + otroCliente.telefono)

    if (nuevoCLiente instanceof Cliente) console.log("NC se refiere a un Cliente");
    else console.log("NC no almacena un obketo de clase Cliente");
    if (otroCliente instanceof Cliente) console.log("OC se refiere a un Cliente");
    else console.log("OC no almacena un obketo de clase Cliente");
}

function ponerEnConsola(texto:string, persona:Persona){
    console.log(texto + ": " + persona.ver());
}

prueba();