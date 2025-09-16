import { Component } from '@angular/core';
import { DetalleComponent } from '../detalle/detalle.component';
import { Resumen } from '../models/resumen';
import { DatosService } from '../datos.service';
import { Planeta } from '../models/planeta';

@Component({
  selector: 'app-secuencia',
  standalone: true,
  imports: [DetalleComponent],
  templateUrl: './secuencia.component.html',
  styleUrl: './secuencia.component.css'
})
export class SecuenciaComponent {
  listaResumen:Resumen[]=[];
  planetaSeleccionado:Planeta | null=null;
  posiciónActual=0;

  constructor(private datos:DatosService) {}

  ngOnInit() {
    this.listaResumen=this.datos.getResumenPlanetas();
    this.planetaSeleccionado=this.datos.getPlaneta(this.listaResumen[this.posiciónActual].id);
  }

  anterior() {
    if (this.posiciónActual==0) return;
    this.posiciónActual--;
    this.planetaSeleccionado=this.datos.getPlaneta(this.listaResumen[this.posiciónActual].id);
  }

  siguiente() {
    if (this.posiciónActual==this.listaResumen.length-1) return;
    this.posiciónActual++;
    this.planetaSeleccionado=this.datos.getPlaneta(this.listaResumen[this.posiciónActual].id);
  }

  nuevaPuntuacion(cantidad:number) {
    if (this.planetaSeleccionado!=null) this.datos.setPuntuacion(this.planetaSeleccionado?.id, this.planetaSeleccionado.puntuacion + cantidad);
  }
}
