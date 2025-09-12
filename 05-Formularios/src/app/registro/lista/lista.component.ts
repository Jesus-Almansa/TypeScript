import { Component, OnInit, inject, signal } from '@angular/core';
import { DatosService } from '../datos.service';
import { Registro } from '../models/registro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  private datos=inject(DatosService);
  lista=signal<Registro[]>([]);

  ngOnInit(): void {
    this.lista.set(this.datos.getLista());
  }
}
