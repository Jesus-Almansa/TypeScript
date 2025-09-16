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
  posicionActual=0;

  constructor(private datos:DatosService) {}

  ngOnInit() {
    this.listaResumen=this.datos.getResumenPlanetas();
    this.planetaSeleccionado=this.datos.getPlaneta(this.listaResumen[this.posicionActual].id);
  }

  anterior() {
    if (this.posicionActual==0) return;
    this.posicionActual--;
    this.planetaSeleccionado=this.datos.getPlaneta(this.listaResumen[this.posicionActual].id);
  }

  siguiente() {
    if (this.posicionActual==this.listaResumen.length-1) return;
    this.posicionActual++;
    this.planetaSeleccionado=this.datos.getPlaneta(this.listaResumen[this.posicionActual].id);
  }

  nuevaPuntuacion(cantidad:number) {
    if (this.planetaSeleccionado!=null) this.datos.setPuntuacion(this.planetaSeleccionado?.id, this.planetaSeleccionado.puntuacion + cantidad);
  }
}
