import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Producto } from '../../models/producto';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'detalle-desplegable',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './desplegable.component.html',
  styleUrls: [ '../estilos/formulario.css', './desplegable.component.css']
})
export class DesplegableComponent implements OnChanges {

  @Input() lista: Producto[] = [];
  @Input() referencia = '';
  @Input() mensaje = 'Texto por defecto';
  @Input() textoOpcionActual: string | null = null;

  @Output() datoSeleccionado = new EventEmitter<string>();

  form: FormGroup; // <--- aquí guardamos el form reactivo

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      referencia: ['', Validators.required]
    });
  }

  ngOnChanges(cambios: SimpleChanges): void {
    // Si cambia la lista o la referencia externa, sincroniza el FormControl
    if (cambios['referencia'] && !cambios['referencia'].firstChange) {
      this.form.patchValue({ referencia: this.referencia });
    }

    if (cambios['textoOpcionActual'] && cambios['textoOpcionActual'].currentValue) {
      for (let p of this.lista) {
        if (p.referencia == this.referencia) {
          p.nombre = cambios['textoOpcionActual'].currentValue;
          return;
        }
      }
    }
  }

  hacerSubmit() {
    if (this.form.invalid) return;
    this.datoSeleccionado.emit(this.form.value.referencia);
  }
}
