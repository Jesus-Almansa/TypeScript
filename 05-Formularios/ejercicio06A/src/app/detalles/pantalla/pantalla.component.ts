import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { Producto } from '../../models/producto';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'detalle-pantalla',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './pantalla.component.html',
  styleUrls: ['../estilos/formulario.css', './pantalla.component.css']
})
export class PantallaComponent {

  @Input() producto:Producto=new Producto(null, null, null, null);
  @Input() fechaMin:Date=new Date();
  @Input() mensaje='Texto por defecto';

  @Output() nuevosDatos=new EventEmitter<Producto>();

  hacerSubmit(formulario:NgForm) {
    if (formulario.invalid) return;
    this.nuevosDatos.emit(this.producto);
  }

  comprobar(campo:NgModel, propiedad:string) {
    return campo.valid || campo.pristine || !campo.errors?.[propiedad]
  }

}