import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadros',
  imports: [],
  templateUrl: './cuadros.html',
  styleUrl: './cuadros.css'
})
export class Cuadros {
  @Input() tituloInput='';
}
