import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejemplo-binding.component.html',
  styleUrl: './ejemplo-binding.component.css'
})
export class EjemploBindingComponent {
  numero=100;
  texto='texto por defecto';

  aumentar(valor:number) {
    this.numero+=valor;
  }

  decrementar(valor:number) {
    this.numero-=valor;
  }

  cambiarTexto(evento:any) {
    this.texto=evento.target.value;
  }
}
