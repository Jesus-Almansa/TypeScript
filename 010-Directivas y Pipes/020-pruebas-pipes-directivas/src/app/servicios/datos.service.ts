import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable()
export class DatosService {
  private http=inject(HttpClient);
  private url='https://fakestoreapi.com/products';

  //No defino Subject adicionales por ningún motivo en especial, simplemente por variar
  leerProductos$() {
    return this.http.get<Producto[]>(this.url);
  }

  leerProducto$(id:number) {
    return this.http.get<Producto>(this.url + "/" + id);
  }
}
