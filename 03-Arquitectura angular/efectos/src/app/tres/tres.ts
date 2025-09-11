import { CommonModule, registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';

import es from '@angular/common/locales/es';

@Component({
  selector: 'app-tres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tres.html',
  styleUrl: './tres.css'
})
export class Tres {
  fechaUno:number=Date.now();
  fechaDos:number=Date.parse('2011-1-27');

  numeroUno=12.8478934;
  numeroDos=12345.564;

  unObjeto={id:42,nombre:'Javier',altura:180, edad:53};

  unTexto='Un mensaje de prueba';

  ngOnInit() {
    registerLocaleData(es);
  }
}
