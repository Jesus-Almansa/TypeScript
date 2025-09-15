import { Routes } from '@angular/router';
import { FormularioPlantillaComponent } from './registro/formulario-plantilla/formulario-plantilla.component';
import { FormularioReactivoComponent } from './registro/formulario-reactivo/formulario-reactivo.component';
import { ListaComponent } from './registro/lista/lista.component';
import { VerComponent } from './paginas/ver/ver.component';
import { CrearComponent } from './paginas/crear/crear.component';
import { EliminarComponent } from './paginas/eliminar/eliminar.component';
import { ModificarComponent } from './paginas/modificar/modificar.component';

export const routes: Routes = [
    {path:"ver", component:VerComponent},
    {path:"crear", component:CrearComponent},
    {path:"eliminar", component:EliminarComponent},
    {path:"modificar", component:ModificarComponent},

    // {path:"plantilla", component:FormularioPlantillaComponent},
    // {path:"reactivo", component:FormularioReactivoComponent},
    // {path:"lista", component:ListaComponent},
    // {path:"", component:VerComponent},
];
