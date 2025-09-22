import { Component, EventEmitter, inject, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosDirectosService } from '../valores/datos-directos.service';
import { NgClass } from '@angular/common';
import { Valor } from '../valores/modelo/valor';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css', '../../app/valores/estilos/estilos.css']
})
export class FormularioComponent{
  
    formulario = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(2)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      precio: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)])
    });

    @Input() bienFormulario=signal(false);
    @Input() malFormulario=signal(false);
    @Input() esperandoFormulario=signal(false);
    @Input() valor = signal<Valor | null>(null);
    @Input() mensajeBotonFormulario = '';

    @Output() valorChange = new EventEmitter<Valor | null>();

  crear() {
      if (this.formulario.invalid) return;
      if (this.valor() != null) return;

      //Ha validado, por lo que estoy seguro de que los valores son correctos. 
      //Pero el compilador no lo sabe...
      let valor=new Valor(Number(this.formulario.value.id), 
                          this.formulario.value.nombre || '', 
                          Number(this.formulario.value.precio));
      this.valorChange.emit(valor);
  }

  modificar() {
    if (this.formulario.invalid) return;
    if (this.valor() == null) return;
    //Ha validado, por lo que estoy seguro de que los valores son correctos.
    //Pero el compilador no lo sabe...
    let valor=new Valor(Number(this.formulario.value.id), 
                        this.formulario.value.nombre || '', 
                        Number(this.formulario.value.precio));
    this.valorChange.emit(valor);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['valor'] && this.valor() != null) {
      this.formulario.setValue({
        id: this.valor()?.id?.toString() ?? '',
        nombre: this.valor()?.nombre?.toString() ?? '',
        precio: this.valor()?.precio?.toString() ?? ''
      });
    } else {
      this.formulario.reset();
    }
  }
}