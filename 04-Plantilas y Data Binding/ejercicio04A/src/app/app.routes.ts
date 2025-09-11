import { Routes } from '@angular/router';
import { ListadoTipoComponent } from './listado-tipo/listado-tipo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListadoGastoComponent } from './listado-gasto/listado-gasto.component';

export const routes: Routes = [
    {path:'listadoTipo', component:ListadoTipoComponent},
    {path:'listadoGasto', component:ListadoGastoComponent},
    {path:'detalle', component:DetalleComponent},
    {path:'', component:ListadoTipoComponent}
];