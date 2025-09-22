import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatosDirectosService } from '../datos-directos.service';
import { Valor } from '../modelo/valor';
import { FormularioComponent } from '../../formulario/formulario.component';

@Component({
  selector: 'app-valores-crear',
  standalone: true,
  imports: [ReactiveFormsModule, FormularioComponent],
  templateUrl: './valores-crear.component.html',
  styleUrls: ['../estilos/estilos.css','./valores-crear.component.css']
})
export class ValoresCrearComponent {
  private datos=inject(DatosDirectosService);


  bien=signal(false);
  mal=signal(false);
  esperando=signal(false);

  valor = signal<Valor | null>(null);

  crear(valor:Valor | null) {
    if (valor==null) return;

    this.bien.set(false);
    this.mal.set(false);
    this.esperando.set(true);

    this.datos.crear(valor).subscribe({
      next:estado=>this.bien.set(true),
      error:estado=>{
        this.mal.set(true);
        this.esperando.set(false);
      },
      complete:()=>{this.esperando.set(false)}
    });

  }
}
