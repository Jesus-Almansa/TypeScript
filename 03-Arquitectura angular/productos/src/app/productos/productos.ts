import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { Datos } from '../datos';

@Component({
  selector: 'productos-lista',
  standalone: true,
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
  providers:[Datos]
})
export class Productos {
  lista:Producto[]=[];

  constructor(private datos:Datos) {
  }

  ngOnInit() {
    this.lista=this.datos.leerDatos();
  }

  aumentar(id:number, porcentaje:number) {
    this.datos.incrementarPrecio(id,porcentaje);
  }

  disminuir(id:number, porcentaje:number) {
    this.datos.decrementarPrecio(id,porcentaje);
  }

  restaurar(id:number) {
    this.datos.restaurarPrecio(id);
  }
}
