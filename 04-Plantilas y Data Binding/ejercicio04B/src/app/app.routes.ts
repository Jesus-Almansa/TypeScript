import { Routes } from '@angular/router';
import { ListadoTipoComponent } from './listado-tipo/listado-tipo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListadoGastoComponent } from './listado-gasto/listado-gasto.component';
import { ListadoDeGastosComponent } from './listado-de-gastos/listado-de-gastos.component';

export const routes: Routes = [
    {path:'listadoDeGastos', component:ListadoDeGastosComponent},
    {path:'listadoTipo', component:ListadoTipoComponent},
    {path:'listadoGasto', component:ListadoGastoComponent},
    {path:'detalle', component:DetalleComponent},
    {path:'', component:ListadoDeGastosComponent}
];