import { Almacen } from "./almacen";

function prueba() {
    // let almacen:Almacen<string>=new Almacen<string>();
    let almacen=new Almacen<string>();
    
    almacen.add("uno");
    almacen.add("dos");
    almacen.add("tres");
    // No compila almacen.add(6969)

    console.log("Añado cuatro: " + almacen.add("cuatro"));
    console.log("Añado dos: " + almacen.add("dos"));

    console.log("Añado uno: " + almacen.remove("uno"));
    console.log("Añado seis: " + almacen.remove("seis"));

    console.log("Resultao")
    for (let valor of almacen.lista) {
        console.log("-------->" + valor);
    }

    let numeros=new Almacen<number>();
    numeros.add(4545);
    numeros.add(3939);
    numeros.add(1);
    // no compila numeros.add("bona tarda")

    let total=0;
    for (let valor of numeros.lista) {
        total+=valor;
    }
    console.log("El total es " + total);
}

prueba();