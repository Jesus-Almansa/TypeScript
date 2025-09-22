import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Producto } from './modelo/producto';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DatosService {

  constructor(private http:HttpClient){}
  private urlBase='https://api.escuelajs.co/api/v1/products';

  //Queda muy raro hacer unos métodos de una manera y el resto de la contraria. Sólo es un ejemplo.
  //Este método devuelve directamente un observable que ejecutará next, complete y error.
  leerTodo$():Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlBase);
  }

  //Y aquí usaré Subject para que la suscripción del componente nunca finalice.
  private producto$=new Subject<Producto | null>();

  getProducto$() {
    return this.producto$;
  }

  leerProducto(id:number):void {
    this.http.get<Producto | null>(this.urlBase + "/" + id).subscribe({
      next:p=>this.producto$.next(p),
      error:e=>this.producto$.next(null),
      complete:()=>{}
    });
  }
}
