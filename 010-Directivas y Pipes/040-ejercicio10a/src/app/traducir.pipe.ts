import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traducir',
  standalone: true
})
export class TraducirPipe implements PipeTransform {

  /* lo convierto todo a texto y recorro los caracteres para "traducirlos". Otra forma
     es convertirlo todo a número e ir dividiéndolo entre 10 en un bucle y jugar con el 
     resto y el cociente de la división */

  transform(entrada: number | string, ...argumentos: string[]): string {
    let procesar:string;
    let base:number;

    if (argumentos.length==1 && argumentos[0]=='h') base=16;
    else base=10;

    if (typeof entrada == 'number') procesar=entrada.toString(base);
    else {
      //lo convierto a número, o lo intento
      let valor=Number(entrada);
      if (isNaN(valor)) return "error";
      //Y ahora a texto, tal vez en base 16
      procesar=valor.toString(base);
    }

    let resultado='';
    for (let letra of procesar) {
      if (resultado.length!=0) resultado+=' - ';
      resultado+=this.convertir(letra);
    }

    return resultado;
  }

  private convertir(letra:string):string {
    if (letra=='0') return "cero";
    if (letra=='1') return "uno";
    if (letra=='2') return "dos";
    if (letra=='3') return "tres";
    if (letra=='4') return "cuatro";
    if (letra=='5') return "cinco";
    if (letra=='6') return "seis";
    if (letra=='7') return "siete";
    if (letra=='8') return "ocho";
    if (letra=='9') return "nueve";
    if (letra=='a') return "A";
    if (letra=='b') return "B";
    if (letra=='c') return "C";
    if (letra=='d') return "D";
    if (letra=='e') return "E";
    return "F";
  }

}
