import { Injectable } from '@angular/core';
import { Valor } from './modelo/valor';
import { Observer, Subject } from 'rxjs';

@Injectable()
export class DatosService {

  private listaRecuperadaDeUnServidor:Valor[];

  constructor() { 
    this.listaRecuperadaDeUnServidor=[
      new Valor("Ficme SL", 34.5),
      new Valor("Aglutine SA", 334.45),
      new Valor("Dormosa Limitada", 93.4),
      new Valor("Aluminsa", 2.45),
      new Valor("Fregaderos del Norte SA", 91.3),
      new Valor("Mármoles López SL", 92.3)
    ];
  }

  //-------------------- Uso de promesas ---------------------------
  getListaPromesa():Promise<Valor[]> {
    return new Promise((aceptado, rechazado)=>{
      setTimeout(()=>{
        if (Math.random()>0.5) aceptado(this.listaRecuperadaDeUnServidor);
        else rechazado();
      },1000);
    });
  }

  //-------------------- Uso de observables/observadores ---------------------------
  private lista$=new Subject<Valor[] | null>();

  getLista$() {
    return this.lista$;
  }

  getListaObservable() {
    setTimeout(()=>{
      if (Math.random()>0.5) this.lista$.next(this.listaRecuperadaDeUnServidor);
      else this.lista$.next(null);
    },1000);
  }

}





















/*
observador$=new Subject<T>();
solicitarDatos() {
  Operación lenta. Al acabar:
  correcto ---> this.observador$.next(datos)
  error    ---> this.observador$.error(error)
  final    ---> this.observador$.complete()
}

observable$.subscribe(
  (datos:T)=> { procesar los datos para la plantilla },
  (error)=> { procesar el error para la plantilla },
  ()=>      { procesar el final para la plantilla }
);

solicitarDatos();
*/


/*
new Promise<T>((fnAceptado, fnRechazado)=> {
  Operación lenta. Al acabar:
  correcto ---> fnAceptado(datos)
  error    ---> fnRechazado()
});


promesa
  .then(datos:T=> {
    procesar los datos para la plantilla
  })
  .error(()=>{
    procesar el error para la plantilla
  })
*/
