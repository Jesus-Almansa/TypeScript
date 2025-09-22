import { Component, inject, signal } from '@angular/core';
import { DatosService } from '../datos.service';
import { Resumen } from '../models/resumen';
import { Foto } from '../models/foto';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [DetalleComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  private datos=inject(DatosService);
  resumenes=signal<Resumen[]>([]);
  foto=signal<Foto| null>(null);

  ngOnInit(): void {
    this.datos.getResumenes$().subscribe(
      lista=>this.resumenes.set(lista)
    );

    this.datos.getFotoBien$().subscribe(
      foto=>this.foto.set(foto)
    );

    this.datos.leerResumenes();
  }

  leerFoto(fecha:string) {
    this.datos.leerFoto(fecha);
  }
}
