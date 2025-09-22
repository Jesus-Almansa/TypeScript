import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { Foto } from '../models/foto';
import { Resumen } from '../models/resumen';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  constructor(private datos:DatosService){}
  resumenes:Resumen[]=[];
  foto:Foto| null=null;

  ngOnInit(): void {
    this.datos.getResumenes$().subscribe(
      lista=>this.resumenes=lista
    );

    this.datos.getFotoBien$().subscribe(
      foto=>this.foto=foto
    );

    this.datos.leerResumenes();
  }

  leerFoto(fecha:string) {
    this.datos.leerFoto(fecha);
  }
}
