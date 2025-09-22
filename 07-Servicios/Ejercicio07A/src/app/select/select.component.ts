import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Valor } from '../valores/modelo/valor';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './select.component.html',
  styleUrls: ['../../app/valores/estilos/estilos.css']
})
export class SelectComponent {
  // la lista de opciones (signal)
  @Input() valores = signal<Valor[]>([]);

  // el valor seleccionado (signal)
  @Input() nombreSeleccionado = signal<Valor | null>(null);

  @Input() bienSelect = signal(false);
  @Input() malSelect = signal(false);
  @Input() esperandoSelect = signal(false);

  @Input() mensajeBotonSelect = '';
  @Output() valorChange = new EventEmitter<Valor | null>();



  // cuando el usuario cambia la selección
  seleccionarNombre(v: Valor | null) {
    this.nombreSeleccionado.set(v);    // actualiza el signal local (referencia compartida con el padre)
    console.log("select.component.ts: seleccionarNombre(): v=", v);
    this.valorChange.emit(v);     // notifica al padre
  }



}
