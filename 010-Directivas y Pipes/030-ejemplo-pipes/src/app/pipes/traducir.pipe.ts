import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traducir',
  standalone: true
})
export class TraducirPipe implements PipeTransform {

  transform(valor: number, ...args: unknown[]): string {
    if (valor==0) return "cero";
    if (valor==1) return "uno";
    if (valor==2) return "dos";
    if (valor==3) return "tres";
    if (valor==4) return "cuatro";
    if (valor==5) return "cinco";
    if (valor==6) return "seis";
    if (valor==7) return "siete";
    if (valor==8) return "ocho";
    if (valor==9) return "nueve";
    return "mayor de nueve";
  }

}
