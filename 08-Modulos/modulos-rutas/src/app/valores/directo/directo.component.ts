import { Component, OnInit, inject, signal } from '@angular/core';
import { DatosDirectosService } from '../datos-directos.service';
import { Observer } from 'rxjs';
import { Valor } from '../modelo/valor';

@Component({
  selector: 'app-directo',
  templateUrl: './directo.component.html',
  styleUrls: ['../estilos/estilos.css','./directo.component.css']
})
export class DirectoComponent implements OnInit{

  constructor(private datos:DatosDirectosService) {}

  bien=false;
  mal=false;
  esperando=false;

  valores:Valor[]=[];

  ngOnInit(): void {
    this.volverALeerTodo();
  }

  volverALeerTodo() {
    this.valores=[];
    this.esperando=true;

    const observador:Observer<Valor[]>={
      next:valores=>{
        this.esperando=false;
        this.mal=false;
        this.bien=true;
        this.valores=valores;
      },
      error:estado=>{
        this.esperando=false;
        this.mal=true;
        this.bien=false;
      },
      complete:()=>{}
    }

    this.datos.leerTodos().subscribe(observador);
  }

  borrar(id:number) {
    this.esperando=true;

    const observador:Observer<boolean>={
      next:estado=>{
        this.esperando=false;
        this.bien=true;
        this.mal=false;
      },
      error:estado=>{
        this.esperando=false;
        this.bien=false;
        this.mal=true;
      },
      complete:()=>{}
    }

    this.datos.borrar(id).subscribe(observador);
  }
}
