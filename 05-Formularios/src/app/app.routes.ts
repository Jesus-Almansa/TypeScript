import { Routes } from '@angular/router';
import { FormularioPlantillaComponent } from './registro/formulario-plantilla/formulario-plantilla.component';
import { FormularioReactivoComponent } from './registro/formulario-reactivo/formulario-reactivo.component';
import { ListaComponent } from './registro/lista/lista.component';

export const routes: Routes = [
    {path:"plantilla", component:FormularioPlantillaComponent},
    {path:"reactivo", component:FormularioReactivoComponent},
    {path:"lista", component:ListaComponent},
    {path:"", component:ListaComponent},
];
