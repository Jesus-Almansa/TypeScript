import { Component, OnInit, inject, signal } from '@angular/core';
import { DatosServidorService } from '../datos-servidor.service';

@Component({
  selector: 'app-segundo',
  standalone: true,
  imports: [],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.css'
})
export class SegundoComponent implements OnInit{
  
  desbloquearSalida=signal(true);
  private datos=inject(DatosServidorService);

  ngOnInit(): void {
    this.datos.setDesbloquearSalida(this.desbloquearSalida());
  }

  cambiarBloqueo() {
    this.desbloquearSalida.update(valor=>!valor);
    this.datos.setDesbloquearSalida(this.desbloquearSalida());
  }

}
