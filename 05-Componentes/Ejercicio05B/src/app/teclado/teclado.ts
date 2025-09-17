import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-teclado',
  standalone: true,
  imports: [],
  templateUrl: './teclado.html',
  styleUrl: './teclado.css'
})
export class TecladoComponent {
  @Output() teclaPulsada=new EventEmitter<string>();

  enviarInput(tecla:string) {
    this.teclaPulsada.emit(tecla);
  }
}