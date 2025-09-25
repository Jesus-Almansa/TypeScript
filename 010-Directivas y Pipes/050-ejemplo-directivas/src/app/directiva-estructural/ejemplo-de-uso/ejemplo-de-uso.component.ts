import { Component } from '@angular/core';
import { TablaMultiplicarDirective } from '../tabla-multiplicar.directive';

@Component({
  selector: 'app-ejemplo-de-uso',
  standalone: true,
  imports: [TablaMultiplicarDirective],
  templateUrl: './ejemplo-de-uso.component.html',
  styleUrl: './ejemplo-de-uso.component.css'
})
export class EjemploDeUsoComponent {
}
