import { Routes } from '@angular/router';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

export const routes: Routes = [
    {path:'uno', component:UnoComponent},
    {path:'dos', component:DosComponent},
    {path:'', component:UnoComponent},
];
