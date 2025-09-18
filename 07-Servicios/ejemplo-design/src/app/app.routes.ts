import { Routes } from '@angular/router';
import { PromesaComponent } from './promesa/promesa.component';
import { ObservableComponent } from './observable/observable.component';

export const routes: Routes = [
    {path:'promesa', component:PromesaComponent},
    {path:'observable', component:ObservableComponent},
    {path:'', component:PromesaComponent}
];
