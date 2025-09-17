import { Routes } from '@angular/router';
import { Almacen } from './almacen/almacen';
import { MuchosCuadros } from './muchos-cuadros/muchos-cuadros';
import { MuchasCalculadoras } from './muchas-calculadoras/muchas-calculadoras';

export const routes: Routes = [
    {path:'cuadros', component:MuchosCuadros},
    {path:'almacen', component:Almacen},
    {path:'calculadora', component:MuchasCalculadoras},
    {path:'', component:MuchasCalculadoras},
];
