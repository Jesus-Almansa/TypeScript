import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosDirectosService } from '../datos-directos.service';
import { Valor } from '../modelo/valor';

@Component({
  selector: 'app-valores-crear',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './valores-crear.component.html',
  styleUrls: ['../estilos/estilos.css','./valores-crear.component.css']
})
export class ValoresCrearComponent {
  private datos=inject(DatosDirectosService);

  formulario = new FormGroup({
    codigo: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    valor: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)])
});

bien=signal(false);
mal=signal(false);
esperando=signal(false);

  crear() {
    if (this.formulario.invalid) return;

    //Ha validado, por lo que estoy seguro de que los valores son correctos. 
    //Pero el compilador no lo sabe...
    let valor=new Valor(Number(this.formulario.value.codigo), 
                        this.formulario.value.nombre || '', 
                        Number(this.formulario.value.valor));

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
