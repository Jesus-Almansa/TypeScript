import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-valores-crear',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './valores-crear.component.html',
  styleUrl: './valores-crear.component.css'
})
export class ValoresCrearComponent {

  formulario = new FormGroup({
    codigo: new FormControl('', [Validators.required, Validators.minLength(2)]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    valor: new FormControl('', Validators.required)
});

crearValor() {
  if (this.formulario.valid) {
    // lógica para crear nuevo valor
  }
}


}
