import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productos } from './productos/productos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Productos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
