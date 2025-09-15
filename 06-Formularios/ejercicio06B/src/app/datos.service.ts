import { Injectable } from '@angular/core';
import { Producto } from './models/producto';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private lista:Producto[]=[
    new Producto("SIG01","Sigma 344 Especial",200.98,'2001-01-23'),
    new Producto("SIG02","Sigma 43F tres velocidades",145,'2006-02-24'),
    new Producto("VOL01","Volcadora Taur F-34",1300,'2006-05-14'),
    new Producto("TER05","Terminadora LIT-34",900.56,'2009-12-02'),
    new Producto("ASE45","Asertadora Decon",1900,'2008-05-09'),
    new Producto("GOTY2024","Balatro",10,'2024-02-20'),
    new Producto("GOTY2025","Silson",20,'2025-09-04')
  ];

/* Al ser una simulación y utilizar el mismo array (con las MISMAS REFERENCIAS) en las
 * difentes llamadas a los métodos pasarán algunas cosas raras (como cambios que se
 * aplican mágicamente sin guardar nada). Eso no pasará con un servidor real, ya que
 * cada vez que se use el método se creará un nuevo array desde cero con nuevos productos. 
 * Si quieres evitarlo en la medida de lo posible y hacer una "simulación más realista", 
 * puedes pasar una copia  del array original con UNA COPIA de los productos.
 * Sucede lo mismo con "leer()" */

  //La verdad es que no merece la pena que te molestes, yo lo he hecho porque soy el profe y tengo que dar ejemplo :)
  
  leerTodos():Producto[] {
    let nuevo:Producto[]=[];
    for (let p of this.lista) 
      nuevo.push(new Producto(p.referencia, p.nombre, p.precio, p.fechaAlta));
    
    return nuevo;
  }

  leer(referencia:string):Producto | null {
    for (let p of this.lista)
      if (p.referencia==referencia) return new Producto(p.referencia, p.nombre, p.precio, p.fechaAlta);
    
    return null;
  }

  crear(p:Producto):boolean {
    if (this.leer(p.referencia || '')!=null) return false;

    this.lista.push(new Producto(p.referencia, p.nombre, p.precio, p.fechaAlta));
    return true;
  }

  borrar(referencia:string):boolean {
    for (let i=0; i < this.lista.length; i++) 
      if (this.lista[i].referencia==referencia) {
        this.lista.splice(i,1);
        return true;
      }

    return false;
  }

  modificar(p:Producto):boolean {
    for (let i in this.lista)
      if (this.lista[i].referencia==p.referencia) {
        this.lista[i]=new Producto(p.referencia, p.nombre, p.precio, p.fechaAlta);
        return true;
      }

    return false;
  }
}
