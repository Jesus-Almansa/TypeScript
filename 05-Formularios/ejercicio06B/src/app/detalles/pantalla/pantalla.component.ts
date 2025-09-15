import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Producto } from '../../models/producto';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'detalle-pantalla',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe], // no necesitamos CommonModule
  templateUrl: './pantalla.component.html',
  styleUrls: ['../estilos/formulario.css', './pantalla.component.css']
})
export class PantallaComponent implements OnInit, OnChanges {

  @Input() producto: Producto = new Producto(null, null, null, null);
  @Input() fechaMin: Date = new Date();
  @Input() mensaje = 'Texto por defecto';

  @Output() nuevosDatos = new EventEmitter<Producto>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      referencia: [this.producto.referencia, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      nombre: [this.producto.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      precio: [this.producto.precio, [Validators.required, Validators.min(10), Validators.max(99999)]],
      fechaAlta: [this.producto.fechaAlta, [Validators.required]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.form && changes['producto'] && changes['producto'].currentValue) {
      this.form.patchValue({
        referencia: this.producto.referencia,
        nombre: this.producto.nombre,
        precio: this.producto.precio,
        fechaAlta: this.producto.fechaAlta
      });
    }
  }

  hacerSubmit(): void {
    if (this.form.invalid) return;

    this.nuevosDatos.emit({
      ...this.producto,
      ...this.form.value
    });
  }

  campoInvalido(campo: string, error: string): boolean {
    const control = this.form.get(campo);
    return !!(control && control.touched && control.errors?.[error]);
  }
}