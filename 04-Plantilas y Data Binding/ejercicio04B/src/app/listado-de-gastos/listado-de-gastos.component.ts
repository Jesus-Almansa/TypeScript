import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConceptosService, Concepto } from '../conceptos.service';

@Component({
  selector: 'app-listado-gastos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado-de-gastos.component.html',
  styleUrls: ['./listado-de-gastos.component.css']
})
export class ListadoDeGastosComponent {
  nuevo: Concepto = { codigo: null, concepto: '', cantidad:null, precioUnidad:null, };

  constructor(public conceptosService: ConceptosService) {}

  agregarConcepto() {
    if (this.nuevo.codigo !== null && this.nuevo.concepto.trim() !== '') {
      this.conceptosService.addConcepto({ ...this.nuevo });
      this.nuevo = { codigo: null, concepto: '', cantidad:null, precioUnidad:null  };
    }
  }

  eliminarConcepto(i: number) {
    this.conceptosService.eliminarConcepto(i);
  }
}
