import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { DatosService } from './datos.service';



@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [DatosService],
  exports:[ListaComponent]
})
export class ProductoModule { }
