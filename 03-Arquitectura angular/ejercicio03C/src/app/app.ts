import { Component, signal } from '@angular/core';
import { Productos } from './productos/productos';

@Component({
  selector: 'app-root',
  imports: [Productos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicio03C');
}
