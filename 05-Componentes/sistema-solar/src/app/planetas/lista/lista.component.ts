import { Component } from '@angular/core';
import { Resumen } from '../models/resumen';
import { DatosService } from '../datos.service';
import { DetalleComponent } from '../detalle/detalle.component';
import { Planeta } from '../models/planeta';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [DetalleComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  listaResumen:Resumen[]=[];
  planetaSeleccionado:Planeta | null=null;

  constructor(private datos:DatosService) {

  }

  ngOnInit() {
    this.listaResumen=this.datos.getResumenPlanetas();
  }

  seleccionar(id:string) {
    this.planetaSeleccionado=this.datos.getPlaneta(id);
  }

  nuevaPuntuacion(cantidad:number) {
    if (this.planetaSeleccionado!=null) this.datos.setPuntuacion(this.planetaSeleccionado.id, this.planetaSeleccionado.puntuacion + cantidad);
  }
}
