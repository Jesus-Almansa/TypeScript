import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoComponent } from './directo/directo.component';
import { ComplejoComponent } from './complejo/complejo.component';
import { DatosComplejosService } from './datos-complejos.service';
import { DatosDirectosService } from './datos-directos.service';



@NgModule({
  declarations: [
    DirectoComponent,
    ComplejoComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DatosComplejosService,
    DatosDirectosService
  ],
  exports:[
    DirectoComponent,
    ComplejoComponent
  ]
})
export class ValoresModule { }
