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


  bienFormulario=signal(false);
  malFormulario=signal(false);
  esperandoFormulario=signal(false);

  valor = signal<Valor | null>(null);

  crear(valor:Valor | null) {
    if (valor==null) return;

    this.bienFormulario.set(false);
    this.malFormulario.set(false);
    this.esperandoFormulario.set(true);

    this.datos.crear(valor).subscribe({
      next:estado=>this.bienFormulario.set(true),
      error:estado=>{
        this.malFormulario.set(true);
        this.esperandoFormulario.set(false);
      },
      complete:()=>{this.esperandoFormulario.set(false)}
    });

  }
}
