import { Component, OnInit, inject, signal } from '@angular/core';
import { DatosDirectosService } from '../datos-directos.service';
import { Valor } from '../modelo/valor';
import { NgClass } from '@angular/common';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-valores-directo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './valores-directo.component.html',
  styleUrls: ['../estilos/estilos.css','./valores-directo.component.css']
})
export class ValoresDirectoComponent implements OnInit{

  private datos=inject(DatosDirectosService);

  bien=signal(false);
  mal=signal(false);
  esperando=signal(false);

  valores=signal<Valor[]>([]);

  ngOnInit(): void {
    this.volverALeerTodo();
  }

  volverALeerTodo() {
    this.valores.set([]);
    this.esperando.set(true);

    const observador:Observer<Valor[]>={
      next:valores=>{
        this.esperando.set(false);
        this.mal.set(false);
        this.bien.set(true);
        this.valores.set(valores);
      },
      error:estado=>{
        this.esperando.set(false);
        this.mal.set(true);
        this.bien.set(false);
      },
      complete:()=>{}
    }

    this.datos.leerTodos().subscribe(observador);
  }

  borrar(id:number) {
    this.esperando.set(true);

    const observador:Observer<boolean>={
      next:estado=>{
        this.esperando.set(false);
        this.bien.set(true);
        this.mal.set(false);
      },
      error:estado=>{
        this.esperando.set(false);
        this.bien.set(false);
        this.mal.set(true);
      },
      complete:()=>{}
    }

    this.datos.borrar(id).subscribe(observador);
  }
}
