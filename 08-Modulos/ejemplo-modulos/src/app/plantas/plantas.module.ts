import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArbolComponent } from './arbol/arbol.component';
import { HierbaComponent } from './hierba/hierba.component';



@NgModule({
  declarations: [
    ArbolComponent,
    HierbaComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports:[
    ArbolComponent,
    HierbaComponent
  ]
})
export class PlantasModule { }
