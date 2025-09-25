import { Component, OnInit, inject } from '@angular/core';
import { Producto } from '../../models/producto';
import { DatosService } from '../../servicios/datos.service';
import { CommonModule, KeyValuePipe, registerLocaleData} from '@angular/common';

import es from '@angular/common/locales/es';

@Component({
  selector: 'app-ejemplo-pipes',
  standalone: true,
  imports: [CommonModule, KeyValuePipe],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent implements OnInit {

  private datos=inject(DatosService);

  lista:Producto[] | null=[];
  producto:Producto | null=null;

  ngOnInit(): void {
    //recuerda... échale también un vistazo a "ng build --locale...", 
    //y al fichero de configuración "angular.json"
    registerLocaleData(es); 

    this.datos.leerProductos$().subscribe({
      next:datos=>this.lista=datos,
      error:e=>this.lista=null
    });
  }

  leerProducto(id:number) {
    this.datos.leerProducto$(id).subscribe(dato=>this.producto=dato);
  }

}
