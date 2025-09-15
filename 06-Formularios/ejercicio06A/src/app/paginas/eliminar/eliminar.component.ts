import { Component, OnInit, inject, signal } from '@angular/core';
import { DesplegableComponent } from '../../detalles/desplegable/desplegable.component';
import { Producto } from '../../models/producto';
import { DatosService } from '../../datos.service';

@Component({
  selector: 'app-borrar',
  standalone: true,
  imports: [DesplegableComponent],
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css', '../estilos/maquetacion.css']
})
export class EliminarComponent implements OnInit{

  private datos=inject(DatosService);
  bien=signal(false);
  mal=signal(false);
  lista=signal<Producto[]>([]);

  ngOnInit(): void {
    this.lista.set(this.datos.leerTodos());
  }

  datosRecibidos(referencia:string) {
    if (referencia==null) return;

    if (this.datos.borrar(referencia)) {
      this.bien.set(true);
      this.mal.set(false);
    }
    else {
      this.bien.set(false);
      this.mal.set(true);
    }
  }
}