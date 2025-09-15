import { Component, OnInit, inject, signal } from '@angular/core';
import { DatosService } from '../../datos.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [],
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css','../estilos/maquetacion.css']
})
export class VerComponent implements OnInit {

  private datos=inject(DatosService);
  lista=signal<Producto[]>([]);

  ngOnInit(): void {
    this.lista.set(this.datos.leerTodos());
  }
}