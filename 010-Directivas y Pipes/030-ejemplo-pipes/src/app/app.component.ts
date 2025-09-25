import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElevarPipe } from './pipes/elevar.pipe';
import { MultiploPipe } from './pipes/multiplo.pipe';
import { TraducirPipe } from './pipes/traducir.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ElevarPipe, MultiploPipe, TraducirPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo-pipes';
}
