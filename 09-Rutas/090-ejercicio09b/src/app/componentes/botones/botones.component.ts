import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  private router=inject(Router);

  valor:string='';

  todosDeGolpe() {
    this.router.navigate([{outlets:{izquierda:'perro', centro:'gato', derecha:'jirafa'}}]);
  }

  enviar(formulario:NgForm) {
    if (formulario.invalid) return;
    this.router.navigate([{outlets:{derecha:`producto/${this.valor}`}}]);
  }
}
