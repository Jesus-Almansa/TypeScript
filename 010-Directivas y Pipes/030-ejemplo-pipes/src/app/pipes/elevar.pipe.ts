import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elevar',
  standalone: true
})
export class ElevarPipe implements PipeTransform {

  transform(valor: number, ...argumentos: number[]): number {
    if (argumentos.length!=1) throw new Error("Es obligatorio indicar el exponente")
    return Math.pow(valor, argumentos[0]);
  }

}



