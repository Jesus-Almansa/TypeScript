import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplo',
  standalone: true
})
export class MultiploPipe implements PipeTransform {

  transform(valor: number | string , ...argumentos: number[]): boolean {
    let multiplo=2;
    if (argumentos.length>0) multiplo=argumentos[0];

    if (typeof valor =='string') valor=Number(valor);
    if (isNaN(valor)) return false;

    return valor % multiplo==0;
  }

}
