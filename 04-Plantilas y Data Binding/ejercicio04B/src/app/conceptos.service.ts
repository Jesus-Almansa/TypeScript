// conceptos.service.ts
import { Injectable } from '@angular/core';
import { Concepto } from './models/concepto';

@Injectable({ providedIn: 'root' })
export class ConceptosService {
  private conceptos: Concepto[] = [];

  getConceptos() {
    return this.conceptos;
  }

  addConcepto(c: Concepto) {
    this.conceptos.push(c);
  }

  eliminarConcepto(index: number) {
    this.conceptos.splice(index, 1);
  }
}
export { Concepto };

