import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { inject } from '@angular/core';

import { Acceso } from './guards/acceso';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';

function aleatorioV2(cantidad:number, respuesta:boolean) {
    return ()=>{
        if (Math.random()>=cantidad) return respuesta;
        else return !respuesta;
    }
}

export const routes: Routes = [
    {path:'configuracion', component:ConfiguracionComponent},
    {path:'primero', component:PrimeroComponent, canActivate:[Acceso.primero()]},
    {path:'segundo', component:SegundoComponent, canActivate:[Acceso.segundo()], 
                                                 canDeactivate:[Acceso.desbloquear()]},

    {path:'', redirectTo:'/configuracion', pathMatch:'full'},
];
