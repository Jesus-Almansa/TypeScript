import { Routes } from '@angular/router';
import { ListaProductoComponent } from './productos/lista/lista-producto.component';
import { ListaUsuarioComponent } from './usuarios/lista/lista-usuario.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { DetalleProductoComponent } from './productos/detalle/detalle-producto.component';
import { DetalleUsuarioComponent } from './usuarios/detalle/detalle-usuario.component';

export const routes: Routes = [
    {path:'lista-producto', component:ListaProductoComponent},
    {path:'lista-usuario', component:ListaUsuarioComponent},

    {path:'detalle-producto/:valor', outlet:'derecha', component:DetalleProductoComponent},
    {path:'detalle-usuario/:valor', outlet:'derecha', component:DetalleUsuarioComponent},

    {path:'',redirectTo:'/lista-producto(derecha:detalle-producto/)',pathMatch:'full'},
    {path:'**', component:NoEncontradoComponent}
];
