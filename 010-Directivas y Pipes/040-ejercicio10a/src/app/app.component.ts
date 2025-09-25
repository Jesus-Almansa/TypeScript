import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TraducirPipe } from './traducir.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TraducirPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
