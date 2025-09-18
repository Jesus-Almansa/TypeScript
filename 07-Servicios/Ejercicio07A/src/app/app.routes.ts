import { Routes } from '@angular/router';
import { ValoresDirectoComponent } from './valores/valores-directo/valores-directo.component';
import { ValoresCrearComponent } from './valores/valores-crear/valores-crear.component';
import { ValoresModificarComponent } from './valores/valores-modificar/valores-modificar.component';

export const routes: Routes = [
    {path:'modificar', component:ValoresModificarComponent},
    {path:'crear', component:ValoresCrearComponent},
    {path:'directo', component:ValoresDirectoComponent},
    {path:'', redirectTo:'/directo', pathMatch:'full'}
];
