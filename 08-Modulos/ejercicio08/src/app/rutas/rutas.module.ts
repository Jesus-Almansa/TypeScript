import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { NasaModule } from '../nasa/nasa.module';
import { VerComponent } from '../nasa/ver/ver.component';
import { ListaComponent } from '../nasa/lista/lista.component';


/* Simplemente proque me apetecía (y porque queda más ordenado desde mi punto de vista) NO he creado las rutas
   con el asistente, sino que he creado el módulo manualmente. de esa manera tiene carpeta propia, y el componente
   "NoEncontrado" queda más organizado. Manías.
*/

const rutas: Routes = [
  {path:'ver',component:VerComponent},
  {path:'lista',component:ListaComponent},
  {path:'', component:VerComponent},
  {path:'**',component:NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas), NasaModule],
  exports: [RouterModule],
  declarations: [
    NoEncontradoComponent
  ]
})
export class RutasModule { }