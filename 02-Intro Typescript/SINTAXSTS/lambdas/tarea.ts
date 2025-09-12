interface tarea {
    comienzo(nombre:string, responsable:string):string;
    coste(op1:number, op2:number, op3:number):number;
    final():string;
}

function pruebas() {
    let ejemploUno= {
        comienzo:function(nombre:string, jefe:string):string {
            return "EjemploUno :" + nombre + ", " + jefe;
        },
        coste:function(a,b,c) {
            return a +b +c;
        },
        final:function() {
            return "Final del ejemplo"
        }
    }

    console.log("--------------------");
    console.log("Comienzo: " + ejemploUno.comienzo("UNO", "JEFE UNO"));
    console.log("Coste: " + ejemploUno.coste(1,2,3));
    console.log("Final: " + ejemploUno.final());
}

pruebas();