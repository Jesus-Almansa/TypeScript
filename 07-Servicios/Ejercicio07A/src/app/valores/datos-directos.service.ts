import { Injectable } from '@angular/core';
import { Valor } from './modelo/valor';
import { Observable, Subject, delay, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosDirectosService {

  private listaRecuperadaDeUnServidor:Valor[];

  /* En un caso real el funcionamiento sería diferente, o al menos tendría que añadir código en los métodos
  de borrar, crear o modificar. Se supone que recibo UNA COPIA de los datos de un servidor. Obviamente, si 
  modifico esa copia añadiendo o quitando valores el servidor ni se entera. Lo que tengo que hacer es ejecutar
  métodos de creación o borrado para pedirle al servidor que cree o borre.
  Pero cuando el servidor lo haga, la COPIA PREVIA que le solicité en su momento no cambiará. Sólo tengo dos opciones:
  1) volver a pedirle al servidor una copia actualiada con los cambios recién aplicados
  2) confiar en mi pericia programática y cuando cree, borre o moodifique y el servidor me diga que lo ha hecho modificar
     mi copia con cuidado.

  Como en este caso todo es mentira y mi "copia" son los "datos reales del servidor", en cuanto realizo un cambio en local
  también cambio "el servidor". Si tuviera un servidor real en todos los métodos del componente me faltaría realizar una 
  petición de lectura adicional, o en todos los métodos del servicio necesitaría sincronizar mi copia en función de la respuesta 
  del servidor. */
  constructor() { 
    this.listaRecuperadaDeUnServidor=[
      new Valor(10, "Ficme SL", 34.5),
      new Valor(20, "Aglutine SA", 334.45),
      new Valor(30, "Dormosa Limitada", 93.4),
      new Valor(40, "Aluminsa", 2.45),
      new Valor(50, "Fregaderos del Norte SA", 91.3),
      new Valor(60, "Mármoles López SL", 92.3)
    ];
  }
  leerTodos():Observable<Valor[]> {
    //No tiene sentido usar operadores de creación para generar una suscripción de un array que ya tienes. Sería más lógico
    //seguir con los "setTimeout" del video anterior. Pero quería mostrar un ejemplo "serio" de uso de RxJS.
    return of<Valor[]>(this.listaRecuperadaDeUnServidor)
      .pipe(
        delay(1000),
        map(dato=>{
          if (Math.random()>0.5) return dato;
          else throw new Error('Error simulado')
        })
      );
  }

  leerUno(id:number):Observable<Valor> {
    //Aquí sigo con las "suscripciones simuladas"
    let dato$=new Subject<Valor>();
    setTimeout(()=>{
        const indice=this.buscarIndiceValor(id);
        if (indice==-1) dato$.error(54);
        else if (Math.random()>0.5) {
          dato$.next(this.listaRecuperadaDeUnServidor[indice]);
          dato$.complete();
        }
        else dato$.error(42);
    },1000);
    return dato$;
  }

  borrar(id:number):Observable<boolean> {
    let dato$=new Subject<boolean>();
    setTimeout(()=>{
      const indice=this.buscarIndiceValor(id);
      if (indice==-1) dato$.error(false);
      else if (Math.random()>0.5) {
        this.listaRecuperadaDeUnServidor.splice(indice,1);
        dato$.next(true);
        dato$.complete();
      }
      else dato$.error(false);
    },1000);
    return dato$;
  }

  private buscarIndiceValor(id:number):number {
    for(let i=0;i < this.listaRecuperadaDeUnServidor.length; i++)
      if (this.listaRecuperadaDeUnServidor[i].id==id) return i;
    
    return -1;
  }

  crear(valor:Valor):Observable<boolean> {
    let dato$=new Subject<boolean>();
    setTimeout(()=>{
      const indice=this.buscarIndiceValor(valor.id);
      if (indice!=-1) dato$.error(false);
      else if (Math.random()>0.5) {
        this.listaRecuperadaDeUnServidor.push(new Valor(valor.id, valor.nombre, valor.precio));
        dato$.next(true);
        dato$.complete();
      }
      else dato$.error(false);
    },1000);
    return dato$;
  }
}