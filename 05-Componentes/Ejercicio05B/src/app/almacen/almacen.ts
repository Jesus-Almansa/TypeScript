import { Component } from '@angular/core';
import { Registro } from '../models/registro';
import { AlmacenService } from '../almacen.service';

@Component({
  selector: 'app-almacen',
  imports: [],
  templateUrl: './almacen.html',
  styleUrl: './almacen.css'
})
export class Almacen {

  lista:Registro [] = [];

  constructor(private datos:AlmacenService) {
    
  }

  // ngOnInit(): {
  //   this.lista=this.datos.getLista();
  // }

  ngOnInit(): void {
    this.lista = this.datos.getLista();
  }

}
