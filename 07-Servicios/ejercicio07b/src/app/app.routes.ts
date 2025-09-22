import { Routes } from '@angular/router';
import { VerComponent } from './nasa/ver/ver.component';
import { ListaComponent } from './nasa/lista/lista.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';

export const routes: Routes = [
    {path:'ver',component:VerComponent},
    {path:'lista',component:ListaComponent},
    {path:'', component:VerComponent},
    {path:'**',component:NoEncontradoComponent}
  ];
