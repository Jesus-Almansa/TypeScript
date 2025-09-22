import { Injectable } from '@angular/core';
import { Producto } from './models/producto';
import { Observable, delay, of } from 'rxjs';

@Injectable()
export class DatosService {

  private lista:Producto[];

  constructor() {
    this.lista=[
      new Producto(10, 'Martillo', 15.99, 'A'),
      new Producto(20, 'Destornillador', 8.50, 'A'), 
      new Producto(30, 'Sierra', 25.75, 'A'),
      new Producto(40, 'Llave ajustable', 12.25, 'B'),
      new Producto(50, 'Taladro eléctrico', 59.99, 'A'),
      new Producto(60, 'Cinta métrica', 5.75, 'A'),
      new Producto(70, 'Clavos (paquete)', 2.99, 'C'),
      new Producto(80, 'Tornillos (paquete)', 3.49, 'B')
    ];
  }

  leerDatos():Observable<Producto[]> {
    return of(this.lista)
            .pipe(
              delay(1000)
            );
  }
}
