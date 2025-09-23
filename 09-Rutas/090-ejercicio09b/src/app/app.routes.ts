import { Routes } from '@angular/router';
import { PerroComponent } from './componentes/perro/perro.component';
import { GatoComponent } from './componentes/gato/gato.component';
import { JirafaComponent } from './componentes/jirafa/jirafa.component';
import { BotonesComponent } from './componentes/botones/botones.component';
import { ProductoComponent } from './componentes/producto/producto.component';

export const routes: Routes = [
    //cada uno en su sitio
    {path:'perro', component:PerroComponent, outlet:'izquierda'},
    {path:'gato', component:GatoComponent, outlet:'centro'},
    {path:'jirafa', component:JirafaComponent, outlet:'derecha'},

    //experimentos
    {path:'botones', component:BotonesComponent, outlet:'izquierda'},
    {path:'gato-de-nuevo', component:GatoComponent, outlet:'centro', data:{deNuevo:true}},
    {path:'producto/:valor', component:ProductoComponent, outlet:'derecha'},
];
