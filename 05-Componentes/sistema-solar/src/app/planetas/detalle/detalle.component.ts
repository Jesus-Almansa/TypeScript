import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Planeta } from '../models/planeta';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  @Input() planeta:Planeta | null=null;
  @Output() datosCambiados=new EventEmitter<number>();

  constructor() {
    registerLocaleData(es);
  }

  sumar() {
    this.datosCambiados.emit(1);
  }

  restar() {
    this.datosCambiados.emit(-1);
  }

  textoSatelites(lunas:string[]) {
    if (lunas.length==0) return 'Ninguno';

    let texto='';
    for (let i in lunas) {
      if (texto !='') {
        //El índice del "for" SIEMPRE es un String. Como TypeScript es muy escrupuloso con los tipos de datos
        //no me queda más remedio que convertirlo. Y como sé que ese texto siempre se podrá convertir, lo hago
        //sucio y simple con "parseInt()"
        if (parseInt(i)==lunas.length-1) texto+=' y ';
        else texto+=", ";
      }
      texto+=lunas[i];
    }
    return texto;
  }
}
