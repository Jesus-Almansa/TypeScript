import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplejoComponent } from './valores/complejo/complejo.component';
import { DirectoComponent } from './valores/directo/directo.component';
import { ValoresModule } from './valores/valores.module';

const routes: Routes = [
  {path:'complejo',component:ComplejoComponent},
  {path:'directo',component:DirectoComponent},
  {path:'',redirectTo:'/complejo',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ValoresModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
