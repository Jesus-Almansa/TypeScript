import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uno',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {
  texto='';

  eventoCambiar(evento:any) {
    this.texto=evento.target.value;
  }

  valorCambiado(cuadro:HTMLInputElement) {
    cuadro.style.fontSize="20pt";
    this.texto=cuadro.value;
  }
}
