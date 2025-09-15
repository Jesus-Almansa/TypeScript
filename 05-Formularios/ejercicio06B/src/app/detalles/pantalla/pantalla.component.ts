import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { Producto } from '../../modelo/producto';
import { AbstractControl, FormControl, FormGroup, FormsModule, NgForm, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Validacion } from '../validaciones/validacion';

@Component({
  selector: 'detalle-pantalla',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './pantalla.component.html',
  styleUrls: ['../estilos/formulario.css', './pantalla.component.css']
})
export class PantallaComponent implements OnChanges{
  @Input() producto:Producto=new Producto(null, null, null, null);
  @Input() fechaMin:Date=new Date();
  @Input() mensaje='Texto por defecto';

  @Output() nuevosDatos=new EventEmitter<Producto>();

  formulario=new FormGroup({
    referencia:new FormControl('',[Validators.required,  Validators.minLength(4), Validators.maxLength(8)]),
    nombre:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
    precio:new FormControl('',[Validators.required, Validators.min(100), Validators.max(100000)]),
    fechaAlta:new FormControl('',[Validators.required, Validacion.fechamin(this.fechaMin.toISOString().split('T')[0])])
  });

  ngOnChanges(cambios: SimpleChanges): void {
    if (cambios['producto'] && cambios['producto'].currentValue) {
      const p=cambios['producto'].currentValue;
      this.formulario.controls.referencia.setValue(p.referencia);
      this.formulario.controls.nombre.setValue(p.nombre);
      this.formulario.controls.precio.setValue(p.precio);
      this.formulario.controls.fechaAlta.setValue(p.fechaAlta);

      //marcianada... si no, no me deja modificar los productos con fechas antiguas
      this.formulario.controls.fechaAlta.clearValidators();
      this.formulario.controls.fechaAlta.addValidators([Validators.required, Validacion.fechamin(p.fechaAlta)]);
      this.formulario.controls.fechaAlta.updateValueAndValidity();
    }
  }

  hacerSubmit() {
    if (this.formulario.invalid) return;
    
    let p=new Producto(
      this.formulario.value.referencia || null,
      this.formulario.value.nombre || null,
      this.formulario.value.precio==null?null:Number.parseFloat(this.formulario.value.precio),
      this.formulario.value.fechaAlta || null);

    this.nuevosDatos.emit(p);
  }

  comprobar(nombreCampo:string, propiedad:string) {
    const controles = this.formulario.controls as {[key: string]: AbstractControl};
    const campo=controles[nombreCampo];
    return campo.valid || campo.pristine || !campo.errors?.[propiedad]
  }

}