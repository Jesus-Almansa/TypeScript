import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pantalla',
  imports: [FormsModule],
  templateUrl: './pantalla.html',
  styleUrl: './pantalla.css'
})
export class PantallaComponent {
  @Input() textoPantalla: string = '';
}