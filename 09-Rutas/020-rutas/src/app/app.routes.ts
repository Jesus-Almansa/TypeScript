import { ActivatedRoute, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { RojoComponent } from './varios/rojo/rojo.component';
import { VerdeComponent } from './varios/verde/verde.component';
import { AzulComponent } from './varios/azul/azul.component';
import { NaranjaComponent } from './varios/naranja/naranja.component';
import { NegroComponent } from './varios/negro/negro.component';
import { NoEncontradoComponent } from './varios/no-encontrado/no-encontrado.component';

const dedicirTitulo=(route:ActivatedRouteSnapshot)=>'color ' + route.url;

export const rutas: Routes = [
    {path:'rojo', component:RojoComponent, title:'color rojo'},
    {path:'verde', component:VerdeComponent, title:'color verde'},
    {path:'azul', component:AzulComponent, title: dedicirTitulo},

    {path:'', redirectTo:'/rojo', pathMatch:'full'},
    {path:'**', component:NoEncontradoComponent, title:'404'},
];



