export class Classifier {
    private nulos:number = 0;
    private numeros:number[] = [];
    private texto:string[] = [];

    clasificar(nuevaCosa: number | string | null) {
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
    }


    getNumeros() {
        return this.numeros;
    }

    getTexto() {
        return this.texto;
    }

    getNulos() {
        return this.nulos;
    }

}