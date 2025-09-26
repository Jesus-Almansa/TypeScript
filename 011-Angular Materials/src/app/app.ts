import { Component, signal } from '@angular/core';
import { sharedImports } from './shared/shared-module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatosService } from './datos.service';
import { Comida } from './models/comida';

@Component({
  selector: 'app-root',
  imports: [sharedImports, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
openBottomSheet() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('011-AngularMaterials');

  lista:Comida[]=[];

  constructor(protected datos:DatosService) {
    this.lista = this.datos.leerTodos();
  }

}
