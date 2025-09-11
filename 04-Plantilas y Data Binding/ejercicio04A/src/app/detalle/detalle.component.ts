import { Component, LOCALE_ID } from '@angular/core';
import { Cliente, TipoCliente } from '../models/cliente';
import { DatosService } from '../datos.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cliente-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',
  providers:[DatosService]
})
export class DetalleComponent {
  lista:Cliente[]=[];
  filtroOrigen='';

  constructor(private datos:DatosService){}

  ngOnInit() {
    registerLocaleData(es);
    this.lista=this.datos.getTodosLosDatos();
  }

  clienteActualIndex: number = 0;

  get clienteActual() {
  return this.lista[this.clienteActualIndex];
  }


  anterior() {
    if (this.clienteActualIndex > 0) this.clienteActualIndex--;
  }

  siguiente() {
    if (this.clienteActualIndex < this.lista.length - 1) this.clienteActualIndex++;
  }


}
