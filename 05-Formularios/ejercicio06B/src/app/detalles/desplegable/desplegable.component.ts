import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Producto } from '../../models/producto';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'detalle-desplegable',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './desplegable.component.html',
  styleUrls: [ '../estilos/formulario.css', './desplegable.component.css']
})
export class DesplegableComponent implements OnChanges{

  @Input() lista:Producto[]=[];
  @Input() referencia='';
  @Input() mensaje='Texto por defecto';
  //Un caso muy particular para cuando se sabe que el texto del "option" actual ha sido modificado. 
  @Input() textoOpcionActual:string | null=null;

  @Output() datoSeleccionado=new EventEmitter<string>();

  formulario=new FormGroup({
    referencia:new FormControl('',Validators.required)
  });

  hacerSubmit() {
    if (this.formulario.invalid) return;
    if (this.formulario.value.referencia==null) return;

    this.datoSeleccionado.emit(this.formulario.value.referencia);
  }

  ngOnChanges(cambios: SimpleChanges): void {
    if (cambios['referencia'] && cambios['referencia'].currentValue) {
      this.formulario.controls.referencia.setValue(cambios['referencia'].currentValue);
    }

    if (cambios['textoOpcionActual'] && cambios['textoOpcionActual'].currentValue) {
      for (let p of this.lista) {
        if (p.referencia==this.formulario.value.referencia) {
          p.nombre=cambios['textoOpcionActual'].currentValue;
          return;
        }
      }
    }
  }

}