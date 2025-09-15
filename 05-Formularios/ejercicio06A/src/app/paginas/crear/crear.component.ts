import { Component, inject, signal } from '@angular/core';
import { PantallaComponent } from '../../detalles/pantalla/pantalla.component';
import { DatosService } from '../../datos.service';
import { DatePipe } from '@angular/common';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [PantallaComponent],
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css', '../estilos/maquetacion.css'],
  providers:[DatePipe]
})
export class CrearComponent {

  //Un truco para usar pipes dentro del código: Si quieres, el componente la puede interpretar como un servicio.
  //Si no quieres liarte tanto usa "new Date().toISOString().split('T')[0]" para poner la fecha por defecto,
  //que en este caso en concreto es más rápido y más simple
  private datePipe=inject(DatePipe);
  private datos=inject(DatosService);

  producto=new Producto(null,null,null,this.datePipe.transform(new Date(),'yyyy-MM-dd'));

  bien=signal(false);
  mal=signal(false);

 datosRecibidos(p:Producto) {
    if (this.datos.crear(p)) {
      this.bien.set(true);
      this.mal.set(false);
    }
    else {
      this.bien.set(false);
      this.mal.set(true);
    }
  }

}