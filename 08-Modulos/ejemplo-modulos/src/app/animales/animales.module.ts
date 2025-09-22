import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerroComponent } from './perro/perro.component';
import { GatoComponent } from './gato/gato.component';
import { PalomaComponent } from './paloma/paloma.component';
import { TodosComponent } from './todos/todos.component';



@NgModule({
  declarations: [
    PerroComponent,
    GatoComponent,
    PalomaComponent,
    TodosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TodosComponent]
})
export class AnimalesModule { }
