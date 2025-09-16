import { Routes } from '@angular/router';
import { ListaComponent } from './planetas/lista/lista.component';
import { SecuenciaComponent } from './planetas/secuencia/secuencia.component';

export const routes: Routes = [
    {path:'lista', component:ListaComponent},
    {path:'secuencia', component:SecuenciaComponent},
    {path:'', component:ListaComponent},
];
