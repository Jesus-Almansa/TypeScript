import { Component, OnInit, inject, signal } from '@angular/core';
import { DatosComplejosService } from '../datos-complejos.service';
import { Valor } from '../modelo/valor';

@Component({
  selector: 'app-complejo',
  templateUrl: './complejo.component.html',
  styleUrls: ['../estilos/estilos.css','./complejo.component.css']
})
export class ComplejoComponent implements OnInit{
  constructor(private datos:DatosComplejosService) {}

  bien=false;
  mal=false;
  esperando=false;

  valores:Valor[]=[];

  ngOnInit(): void {
    this.datos.getLeerTodo$().subscribe(valores=>{
      this.esperando=false;
      this.mal=false;
      this.bien=true;
      this.valores=valores;
    });

    this.datos.getError$().subscribe(estado=>{
      this.esperando=false;
      this.mal=true;
      this.bien=false;
    });

    this.datos.getBorrar$().subscribe(estado=>{
      this.esperando=false;
      this.bien=estado;
      this.mal=!estado;
    });

    this.volverALeerTodo();
  }

  volverALeerTodo() {
    this.valores=[];
    this.esperando=true;
    this.datos.leerTodos();
  }

  borrar(id:number) {
    this.esperando=true;
    this.datos.borrar(id);
  }
}
