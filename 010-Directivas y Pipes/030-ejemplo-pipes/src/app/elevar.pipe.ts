import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elevar',
  standalone: true
})
export class ElevarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}


