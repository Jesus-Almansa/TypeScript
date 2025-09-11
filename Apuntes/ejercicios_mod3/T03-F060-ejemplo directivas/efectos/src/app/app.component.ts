import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UnoComponent, DosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
