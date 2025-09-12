function pruebas() {
    var ejemploUno = {
        comienzo: function (nombre, jefe) {
            return "EjemploUno :" + nombre + ", " + jefe;
        },
        coste: function (a, b, c) {
            return a + b + c;
        },
        final: function () {
            return "Final del ejemplo";
        }
    };
    console.log("--------------------");
    console.log("Comienzo: " + ejemploUno.comienzo("UNO", "JEFE UNO"));
    console.log("Coste: " + ejemploUno.coste(1, 2, 3));
    console.log("Final: " + ejemploUno.final());
}
pruebas();
