import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CajaComponent } from './caja/caja.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CajaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyeccion';
}
