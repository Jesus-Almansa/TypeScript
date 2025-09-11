import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { DatosService } from '../datos.service';

@Component({
  selector: 'productos-lista',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  providers:[DatosService]
})
export class ProductosComponent {
  lista:Producto[]=[];

  constructor(private datos:DatosService) {
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
