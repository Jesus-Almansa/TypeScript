import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjemploBindingComponent } from './ejemplo-binding/ejemplo-binding.component';
import { Producto } from './models/producto';
import { DatosService } from './datos.service';
import { ListaComponent } from './lista/lista.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lista:Producto[]=[];

  constructor(private datos:DatosService){}

  ngOnInit() {
    this.lista=this.datos.leerDatos();
  }
}