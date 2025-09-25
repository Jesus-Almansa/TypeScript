import { Component } from '@angular/core';
import { sharedImports } from '../shared/shared-module';

@Component({
  selector: 'app-estado',
  imports: [sharedImports],
  templateUrl: './estado.html',
  styleUrl: './estado.css'
})
export class Estado {

  estado = true;

  cambiar() {
    this.estado = !this.estado;
  }

}
