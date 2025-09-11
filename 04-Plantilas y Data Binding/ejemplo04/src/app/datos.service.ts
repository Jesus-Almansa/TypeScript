import { Injectable } from '@angular/core';
import { Producto } from './models/producto';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private lista:Producto[];

  constructor() {
    this.lista=[
      new Producto(100,'Sed vitae','Nunc sed tellus egestas malesuada vel at erat', 23,'R'),
      new Producto(200,'Donec ornare','Mi egestas mollis aliquam, metus odio facilisis arcu ut rhoncus sapien nisi id mauris', 23.32,'V'),
      new Producto(320,'Nulla id iaculis','Tortor Donec id condimentum purus. Curabitur sit amet convallis felis', 119,'A'),
      new Producto(400,' Mauris','Interdum nec nunc et mollis', 94.5,'A'),
      new Producto(540,'Orci varius natoque','Penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 12,'A'),
      new Producto(870,'Suspendisse','Dignissim orci est at vulputate nisl condimentum non. Vestibulum et enim sapien', 42,'N'),
      new Producto(910,'Suspendisse rhoncus','Semper turpis, eget sagittis ante dictum id nullam venenatis varius risus eget laoreet', 17.98,'R')
    ];
  }

  
  leerDatos():Producto[] {
    return this.lista;
  }

}
