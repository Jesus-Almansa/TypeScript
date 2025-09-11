import { Persona } from "./decoradores";


function prueba() {
    let joker = new Persona("Rem", "Amamiya", 17);
    let gold = new Persona("Gol", "D.Roger", 40);

    joker.ver();
    gold.ver();
}

prueba();