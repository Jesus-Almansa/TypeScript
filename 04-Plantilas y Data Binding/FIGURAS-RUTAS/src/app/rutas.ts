import {Routes} from '@angular/router';
import { TrianguloComponent } from './triangulo/triangulo.component';
import { CirculoComponent } from './circulo/circulo.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';

export const rutas:Routes=[
    {path:'triangulasao',component:TrianguloComponent},
    {path:'circulo', component:CirculoComponent},
    {path:'cuadrado', component:CuadradoComponent},
    
    {path:'', component:CirculoComponent}
];