import { Routes } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { OtroComponent } from './otro/otro.component';

export const routes: Routes = [
    {path:'padre', component:PadreComponent},
    {path:'otro', component:OtroComponent},
    // {path:'', redirectTo: 'padre', pathMatch: 'full'}
];