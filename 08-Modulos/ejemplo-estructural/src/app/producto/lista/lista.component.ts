import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit{
  constructor(private datos:DatosService) {}

  productos:Producto[]=[];

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(lista=>this.productos=lista);
  }
}
