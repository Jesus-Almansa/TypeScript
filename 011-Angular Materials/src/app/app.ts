import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contar } from "./contar/contar";
import { MatButtonModule } from '@angular/material/button';
import { Estado } from './estado/estado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contar, MatButtonModule, Estado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('011-AngularMaterials');
}
