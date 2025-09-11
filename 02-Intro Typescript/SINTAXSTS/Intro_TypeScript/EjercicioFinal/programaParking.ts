import { Garaje, Vehiculo } from "./parking";


function prueba(){

    let garaje = new Garaje(15);

    let blanco = new Vehiculo('1111-KKK', 'coche blanco')
    let rojo = new Vehiculo('2222-KKK', 'coche rojo')

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