import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AumentarDirective } from './directivas/aumentar.directive';
import { RotarDirective } from './directivas/rotar.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AumentarDirective, RotarDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
