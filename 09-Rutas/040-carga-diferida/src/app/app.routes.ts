import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { RojoComponent } from './varios/rojo/rojo.component';
import { VerdeComponent } from './varios/verde/verde.component';
import { AzulComponent } from './varios/azul/azul.component';
import { NaranjaComponent } from './varios/naranja/naranja.component';
import { NoEncontradoComponent } from './varios/no-encontrado/no-encontrado.component';
import { NegroComponent } from './varios/negro/negro.component';

const dedicirTitulo=(route:ActivatedRouteSnapshot)=>'color ' + route.url;

export const rutas: Routes = [
    {path:'rojo', component:RojoComponent, title:'color rojo'},
    {path:'verde', component:VerdeComponent, title:'color verde'},
    {path:'azul', component:AzulComponent, title: dedicirTitulo},

    {path:'naranja', component:NaranjaComponent, children:[
        {path:'rojo', component:RojoComponent, title:'naranja - rojo'},
        {path:'verde', component:VerdeComponent, title:'naranja - verde'},
        {path:'azul', component:AzulComponent, title: 'naranja - azul'}
    ]},

    //{path:'negro', component:NegroComponent, title: dedicirTitulo},
    {path:'negro', loadComponent:()=>import('./varios/negro/negro.component').then(c=>c.NegroComponent)},

    {path:'', redirectTo:'/rojo', pathMatch:'full'},
    {path:'**', component:NoEncontradoComponent, title:'404'},
    
];
