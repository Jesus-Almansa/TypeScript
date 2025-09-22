import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from '../../formulario/formulario.component';
import { SelectComponent } from '../../select/select.component';
import { Valor } from '../modelo/valor';
import { DatosDirectosService } from '../datos-directos.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-valores-modificar',
  standalone: true,
  imports: [ReactiveFormsModule, FormularioComponent, SelectComponent],
  templateUrl: './valores-modificar.component.html',
  styleUrls: ['./valores-modificar.component.css', '../estilos/estilos.css']
})
export class ValoresModificarComponent {
  private datos = inject(DatosDirectosService);

  bienFormulario = signal(false);
  malFormulario = signal(false);
  esperandoFormulario = signal(false);

  bienSelect = signal(false);
  malSelect = signal(false);
  esperandoSelect = signal(false);

  valores = signal<Valor[]>([]);
  nombreSeleccionado = signal<Valor | null>(null);

  ngOnInit(): void {
    this.volverALeerTodo();
  }

  volverALeerTodo() {
    this.valores.set([]);
    this.esperandoSelect.set(true);

    const observador: Observer<Valor[]> = {
      next: valores => {
        this.esperandoSelect.set(false);
        this.malSelect.set(false);
        this.bienSelect.set(true);
        this.valores.set(valores);
      },
      error: estado => {
        this.esperandoSelect.set(false);
        this.malSelect.set(true);
        this.bienSelect.set(false);
      },
      complete: () => {}
    }

    this.datos.leerTodos().subscribe(observador);
  }

  seleccionar(v: Valor | null) {
    this.nombreSeleccionado.set(v);
  }

  modificar(valor: Valor | null) {
    if (!valor) return;

    this.nombreSeleccionado.set(valor);  // actualizar señal

    this.bienSelect.set(false);
    this.malSelect.set(false);
    this.esperandoSelect.set(true);

    this.datos.modificar(valor).subscribe({
      next: () => {
        this.bienSelect.set(true);
        this.malSelect.set(false);
        this.esperandoSelect.set(false);
      },
      error: () => {
        this.bienSelect.set(false);
        this.malSelect.set(true);
        this.esperandoSelect.set(false);
      }
    });
  }
}