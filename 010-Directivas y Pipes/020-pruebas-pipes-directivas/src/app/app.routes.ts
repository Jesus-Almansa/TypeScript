import { Routes } from '@angular/router';
import { EjemploPipesComponent } from './pipes/ejemplo-pipes/ejemplo-pipes.component';
import { EjemploDirectivasComponent } from './directivas/ejemplo-directivas/ejemplo-directivas.component';

export const routes: Routes = [
    {path:'ejemplo-pipes', component:EjemploPipesComponent},
    {path:'ejemplo-directivas', component:EjemploDirectivasComponent},
    
    {path:'', redirectTo:'/ejemplo-pipes', pathMatch:'full'}
];
