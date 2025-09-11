import { Component, LOCALE_ID } from '@angular/core';
import { Cliente, TipoCliente } from '../models/cliente';
import { DatosService } from '../datos.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-gasto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado-gasto.component.html',
  styleUrl: './listado-gasto.component.css'
})

export class ListadoGastoComponent {
  lista:Cliente[]=[];
  filtroOrigen='';

  constructor(private datos:DatosService){}

  ngOnInit() {
    registerLocaleData(es);
    this.lista=this.datos.getTodosLosDatos();
  }

  filtroGastoSuperior: number | null = null;
  filtroGastoInferior: number | null = null;

  aplicarFiltros() {
    this.lista = this.datos.getTodosLosDatos().filter(c => {
      const mayorQueInferior = this.filtroGastoInferior !== null 
        ? c.gastoMedio >= this.filtroGastoInferior 
        : true;
      const menorQueSuperior = this.filtroGastoSuperior !== null 
        ? c.gastoMedio <= this.filtroGastoSuperior 
        : true;

      return mayorQueInferior && menorQueSuperior;
    });
  }



}