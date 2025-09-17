import { Component, signal } from '@angular/core';
import { Calculadora } from "./calculadora/calculadora";

@Component({
  selector: 'app-root',
  imports: [Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Ejercicio06A');
}
