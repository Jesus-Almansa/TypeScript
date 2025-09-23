import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ResumenUsuario, Usuario } from './modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosUsuariosService {
  private http=inject(HttpClient);

  private urlBase="https://fakestoreapi.com/users";

 leerResumen$() {
    return this.http.get<ResumenUsuario[]>(this.urlBase);
  }

  leerUsuario$(id:number) {
    return this.http.get<Usuario>(`${this.urlBase}/${id}`);
  }
}
