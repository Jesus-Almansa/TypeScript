import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Contar } from './contar/contar';
import { Estado } from './estado/estado';
import { NoEncontrado } from './no-encontrado/no-encontrado';

const decidirTitulo = (route: ActivatedRouteSnapshot) => 'Material: ' + route.url;

export const rutas: Routes = [
    { path: 'contar', component: Contar, title: decidirTitulo },
    { path: 'estado', component: Estado, title: decidirTitulo },
    { path: '**', component: NoEncontrado, title: '404' },
    { path: '', redirectTo: '/', pathMatch: 'full' }
];
