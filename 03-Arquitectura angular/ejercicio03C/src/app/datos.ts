import { Injectable } from '@angular/core';
import { Producto } from './models/objetoProducto';

@Injectable()
export class Datos {
  private lista:Producto[];

  constructor() {
    this.lista=[
      new Producto(100,'Sed vitae','Nunc sed tellus egestas malesuada vel at erat', 23),
      new Producto(200,'Donec ornare','Mi egestas mollis aliquam, metus odio facilisis arcu ut rhoncus sapien nisi id mauris', 23.32),
      new Producto(320,'Nulla id iaculis','Tortor Donec id condimentum purus. Curabitur sit amet convallis felis', 119),
      new Producto(400,' Mauris','Interdum nec nunc et mollis', 94.5),
      new Producto(540,'Orci varius natoque','Penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 12),
      new Producto(870,'Suspendisse','Dignissim orci est at vulputate nisl condimentum non. Vestibulum et enim sapien', 42),
      new Producto(910,'Suspendisse rhoncus','Semper turpis, eget sagittis ante dictum id nullam venenatis varius risus eget laoreet', 17.98),
      new Producto(1110,'Fusce tincidunt','Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae', 65.75),
      new Producto(1250,'Curabitur fermentum','Phasellus gravida ex vitae magna consequat, ac hendrerit purus imperdiet.', 33.20)
    ];
  }

  leerDatos():Producto[] {
    return this.lista;
  }

  private encontarProducto(id:number):Producto | null {
    for (let p of this.lista) 
      if (p.id==id) return p;
    
    return null;
  }

  // siguiente(id:number)

  incrementarPrecio(id:number, porcentaje:number):boolean {
    let p=this.encontarProducto(id);
    if (p==null) return false;

    p.precio*=(1+porcentaje);
    return true;
  }

  decrementarPrecio(id:number, porcentaje:number):boolean {
    let p=this.encontarProducto(id);
    if (p==null) return false;

    p.precio/=(1+porcentaje);
    return true;
  }

  restaurarPrecio(id:number):boolean {
    let p=this.encontarProducto(id);
    if (p==null) return false;

    p.precio=p.precioInicial;
    return true;
  }
}
