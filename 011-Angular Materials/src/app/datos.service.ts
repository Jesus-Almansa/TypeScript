import { Injectable } from '@angular/core';
import { Comida } from './models/comida';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private lista:Comida[]=[
    new Comida(0,'Pollo asado', 200, 8, 0, 32),
    new Comida(1,'Ensalada mixta', 150, 5, 10, 3),
    new Comida(2,'Arroz blanco', 180, 1, 40, 4),
    new Comida(3,'Pescado a la plancha', 220, 12, 0, 30),
    new Comida(4,'Fruta variada', 100, 0, 25, 1)
  ];

/* Al ser una simulación y utilizar el mismo array (con las MISMAS REFERENCIAS) en las
 * difentes llamadas a los métodos pasarán algunas cosas raras (como cambios que se
 * aplican mágicamente sin guardar nada). Eso no pasará con un servidor real, ya que
 * cada vez que se use el método se creará un nuevo array desde cero con nuevos productos. 
 * Si quieres evitarlo en la medida de lo posible y hacer una "simulación más realista", 
 * puedes pasar una copia  del array original con UNA COPIA de los productos.
 * Sucede lo mismo con "leer()" */

  //La verdad es que no merece la pena que te molestes, yo lo he hecho porque soy el profe y tengo que dar ejemplo :)
  
  leerTodos():Comida[] {
    let nuevo:Comida[]=[];
    for (let p of this.lista)
      nuevo.push(new Comida(p.id,p.nombre, p.calorias, p.grasa, p.carbohidratos, p.proteina, p.referencia));
    
    return nuevo;
  }

  leer(referencia:string):Comida | null {
    for (let p of this.lista)
      if (p.nombre==referencia) return new Comida(p.id, p.nombre, p.calorias, p.grasa, p.carbohidratos, p.proteina, p.referencia);
    
    return null;
  }

  crear(p:Comida):boolean {
    if (this.leer(p.nombre || '')!=null) return false;

    this.lista.push(new Comida(p.id, p.nombre, p.calorias, p.grasa, p.carbohidratos, p.proteina, p.referencia));
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

  modificar(p:Comida):boolean {
    for (let i in this.lista)
      if (this.lista[i].nombre==p.nombre) {
        this.lista[i]=new Comida(p.id, p.nombre, p.calorias, p.grasa, p.carbohidratos, p.proteina, p.referencia);
        return true;
      }

    return false;
  }
}