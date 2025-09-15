import { Routes } from '@angular/router';
import { VerComponent } from './paginas/ver/ver.component';
import { CrearComponent } from './paginas/crear/crear.component';
import { EliminarComponent } from './paginas/eliminar/eliminar.component';
import { ModificarComponent } from './paginas/modificar/modificar.component';

export const routes: Routes = [
    {path:"ver", component:VerComponent},
    {path:"crear", component:CrearComponent},
    {path:"eliminar", component:EliminarComponent},
    {path:"modificar", component:ModificarComponent},
    {path:"", component:VerComponent},
];
