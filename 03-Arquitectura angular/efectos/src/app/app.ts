import { Component, signal } from '@angular/core';
import { Uno } from './uno/uno';
import { Dos } from './dos/dos';
import { Tres } from "./tres/tres";

@Component({
  selector: 'app-root',
  imports: [Uno, Dos, Tres],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('efectos');
}