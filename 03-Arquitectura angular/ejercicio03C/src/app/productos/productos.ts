import { Component } from '@angular/core';
import { Producto } from '../models/objetoProducto';
import { Datos } from '../datos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'productos-lista',
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
  providers:[Datos]
})
export class Productos {
  listaCompleta:Producto[]=[];
  pagina:number = 0;
  lista:Producto[] = [];

  constructor(private datos:Datos) {
  }

  ngOnInit() {
    this.listaCompleta=this.datos.leerDatos();
    this.lista = this.listaCompleta.slice(this.pagina*3, this.pagina*3 +3);
  }

  // siguiente(){
  //   if (this.pagina === Math.trunc(this.listaCompleta.length/3)) this.pagina=0;
  //   else this.pagina++;
  //   this.lista = this.listaCompleta.slice(this.pagina*3, this.pagina*3 +3);
  // }

  siguiente() {
    const ultimaPagina = Math.ceil(this.listaCompleta.length / 3) - 1;
    // solo si no estamos en la última página
    if (this.pagina < ultimaPagina) {
      this.pagina++;
      this.lista = this.listaCompleta.slice(this.pagina * 3, this.pagina * 3 + 3);
    }
  }

  anterior() {
    // solo si no estamos en la primera página
    if (this.pagina > 0) {
      this.pagina--;
      this.lista = this.listaCompleta.slice(this.pagina * 3, this.pagina * 3 + 3);
    }
  }


}
