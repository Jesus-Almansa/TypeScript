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
  nombreModificar = signal<Valor | null>(null);

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
    this.nombreModificar.set(v);
  }

  modificar(valor:Valor | null) {
    if (valor==null) return;

    this.nombreModificar.set({...valor}); // fuerza cambio de referencia
    this.valores.update(arr => arr.map(v => v.id === valor.id ? valor : v));

    this.bienFormulario.set(false);
    this.malFormulario.set(false);
    this.esperandoFormulario.set(true);

this.datos.modificar(valor).subscribe({
  next: ok => {
    if (ok) {
      this.bienFormulario.set(true);
      this.malFormulario.set(false);
    } else {
      this.bienFormulario.set(false);
      this.malFormulario.set(true);
    }
    this.esperandoFormulario.set(false);
  },
  error: err => {
    // aquí solo entrarás si hay un error real de red o similar
    console.error(err);
    this.bienFormulario.set(false);
    this.malFormulario.set(true);
    this.esperandoFormulario.set(false);
  }
});
  }

}