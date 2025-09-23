import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto, ResumenProducto } from './modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class DatosProductosService {

  private http=inject(HttpClient);

  private resumen$=new Subject<ResumenProducto[] | null>();
  private producto$=new Subject<Producto | null>();
  private urlBase="https://fakestoreapi.com/products";

  getResumen$() {
    return this.resumen$;
  }

  getProducto$() {
    return this.producto$;
  }

  leerResumen() {
    this.http.get<ResumenProducto[]>(this.urlBase).subscribe({
      next:datos=>this.resumen$.next(datos),
      error:e=>this.resumen$.next(null),
      complete:()=>{}
    });
  }

  leerProducto(id:number) {
    this.http.get<Producto>(`${this.urlBase}/${id}`).subscribe({
      next:dato=>this.producto$.next(dato),
      error:e=>this.producto$.next(null),
      complete:()=>{}
    });
  }
}
