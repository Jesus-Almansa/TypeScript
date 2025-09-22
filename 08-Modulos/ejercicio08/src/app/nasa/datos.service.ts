import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';
import { Foto } from './models/foto';
import { Resumen } from './models/resumen';

@Injectable()
export class DatosService {

  constructor(private http:HttpClient){}

  private fotoBien$=new Subject<Foto>();
  private fotoMal$=new Subject<string>();
  private resumenes$=new Subject<Resumen[]>();

  private urlBase="https://api.nasa.gov/planetary/apod?api_key=mEuMu23Ik2PPpnb9FZBQUmvrxSCfkEqY4ki5t1R8&date=";

  //Lo usaré para recordar todas las fotos leídas
  private listaDeFotosLeidas:Foto[]=[];

  getFotoBien$() {
    return this.fotoBien$;
  }

  //No necesito en absoluto un observable para los errores, me podrí ahaber limitado a enviar un "null" en "fotoBien$"
  //pero como soy el profe quería dar ejemplo
  getFotoMal$() {
    return this.fotoMal$;
  }

  getResumenes$() {
    return this.resumenes$;
  }

  leerResumenes():void {
    const lista:Resumen[]=[];
    for (let i=0; i < this.listaDeFotosLeidas.length; i++) 
      lista.push(new Resumen(this.listaDeFotosLeidas[i].date, this.listaDeFotosLeidas[i].title));
    
    this.resumenes$.next(lista);
  }

  leerFoto(fecha:string):void {
    let encontrada=this.listaDeFotosLeidas.find(f=>f.date==fecha);
    if (encontrada) {
      this.fotoBien$.next(encontrada);
      //Si ya la tengo, no vuelvo a pedirla
      return;
    }

    const observador={
      next:(dato:Foto)=>{
        //Si la he buscado, es que no la tenía
        this.listaDeFotosLeidas.push(dato);
        this.fotoBien$.next(dato);
      },
      error:(error:any)=>this.fotoMal$.next("la NASA ha caido")
    };

    this.http.get<Foto>(this.urlBase + fecha).subscribe(observador);
  }
}
