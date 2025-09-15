import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';

export const routes: Routes = [
    {path:'uno', component:UnoComponent},
    {path:'dos', component:DosComponent},
    {path:'tres', component:TresComponent},
    {path:'', component:TresComponent}
];
