import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caja',
  standalone: true,
  imports: [],
  templateUrl: './caja.component.html',
  styleUrl: './caja.component.css'
})
export class CajaComponent {
  @Input() tituloInput='';
}
