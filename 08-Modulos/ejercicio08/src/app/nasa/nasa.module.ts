import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaComponent } from './lista/lista.component';
import { VerComponent } from './ver/ver.component';
import { DatosService } from './datos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetalleComponent,
    ListaComponent,
    VerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ListaComponent,
    VerComponent
  ],
  providers:[
    DatosService
  ]
})
export class NasaModule { }
