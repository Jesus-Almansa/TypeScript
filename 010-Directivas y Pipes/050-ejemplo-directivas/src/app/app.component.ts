import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayusculasDirective } from './directivas/mayusculas.directive';
import { EjemploDeUsoComponent } from './directiva-estructural/ejemplo-de-uso/ejemplo-de-uso.component';
import { MinimoV1Directive } from './directivas/minimov1.directive';
import { FondoDirective } from './directivas/fondo.directive';
import { MinimoV2Directive } from './directivas/minimov2.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EjemploDeUsoComponent, 
            MayusculasDirective, MinimoV1Directive, MinimoV2Directive, FondoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
