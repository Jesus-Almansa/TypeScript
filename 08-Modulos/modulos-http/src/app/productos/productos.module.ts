import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DatosService } from './datos.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[ListadoComponent],
  providers:[DatosService]
})
export class ProductosModule { }
