import { Component } from '@angular/core';
import { sharedImports } from '../shared/shared-module';


@Component({
  selector: 'app-contar',
  imports: [sharedImports],
  templateUrl: './contar.html',
  styleUrl: './contar.css'
})
export class Contar {

  count = 0;
  title = 'Contador';
  base = 5;

  aumentar(valor: number) {
    this.count += valor;
  }

  decrementar(valor: number) {
    this.count -= valor;
  }
  aCero() {
    this.count = 0;
  }

  seleccionarValor(valor:number) {
    // valor += valor;
    this.base = valor;
  }

}
