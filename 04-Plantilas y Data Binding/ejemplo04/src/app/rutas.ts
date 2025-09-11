import { Routes } from "@angular/router";
import { EjemploBindingComponent } from "./ejemplo-binding/ejemplo-binding.component";
import { ListaComponent } from "./lista/lista.component";

export const rutas:Routes=[
    {path:'binding', component:EjemploBindingComponent},
    {path:'bloques',component:ListaComponent},
    {path:'',component:ListaComponent}
    // {path:'/',component:ListaComponent} Esto no funciona
];