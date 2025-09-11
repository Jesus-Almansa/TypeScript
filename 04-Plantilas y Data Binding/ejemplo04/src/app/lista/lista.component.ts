import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  lista:Producto[]=[];

  constructor(private datos:DatosService){}

  ngOnInit() {
    this.lista=this.datos.leerDatos();
  }
}
