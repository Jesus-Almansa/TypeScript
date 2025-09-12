export class Vehiculo {
    constructor(public matricula: string, public color: string) {}

    ver() {
        return `${this.matricula}, ${this.color}`;
    }
}

export class Garaje {
    private plazas: (Vehiculo | null)[];

    constructor(numeroPlazas: number) {
        this.plazas = new Array(numeroPlazas);
        for (let i = 0; i < numeroPlazas; i++) {
            this.plazas[i] = null;
        }
    }

    public aparcar(vehiculo: Vehiculo, plaza: number) {
        if (this.plazas[plaza] === null) {
            this.plazas[plaza] = vehiculo;
            console.log(`Vehículo ${this.plazas[plaza].ver()} aparcado en la plaza ${plaza}`);
        } else {
            console.log("Esta plaza está ocupada");
        }
    }

    public desaparcar(plaza: number) {
        if (this.plazas[plaza] != null) {
            console.log(`Vaciando plaza ${plaza} de vehículo: ${this.plazas[plaza]?.ver()}`);
            this.plazas[plaza] = null;
        } else {
            console.log(`En la plaza ${plaza} no hay coche`);
        }
    }

    // Dibuja X si la plaza está ocupada, vacío si no
    public verEnConsolaPlazasLibres(columnas: number = 5) {
        const filas = Math.ceil(this.plazas.length / columnas);

        for (let fila = 0; fila < filas; fila++) {
            let indices = "";
            let ocupacion = "";
            for (let col = 0; col < columnas; col++) {
                const idx = fila * columnas + col;
                if (idx < this.plazas.length) {
                    // simula padStart sin usarlo
                    let numStr = "0" + (idx + 1);
                    numStr = numStr.slice(-2); 
                    indices += numStr + "  ";
                    ocupacion += (this.plazas[idx] ? "X" : " ") + "   ";
                }
            }
            console.log(indices);
            console.log(ocupacion);
        }
    }

    // Muestra matrículas, "..." si no hay coche
    public verEnConsolaCoches(columnas: number = 5) {
        const filas = Math.ceil(this.plazas.length / columnas);

        for (let fila = 0; fila < filas; fila++) {
            let indices = "";
            let matriculas = "";
            for (let col = 0; col < columnas; col++) {
                const idx = fila * columnas + col;
                if (idx < this.plazas.length) {
                    let numStr = "0" + (idx + 1);
                    numStr = numStr.slice(-2);
                    indices += numStr + "  ";
                    matriculas += (this.plazas[idx] ? this.plazas[idx].matricula : "...") + " ";
                }
            }
            console.log(indices);
            console.log(matriculas);
        }
    }
}
