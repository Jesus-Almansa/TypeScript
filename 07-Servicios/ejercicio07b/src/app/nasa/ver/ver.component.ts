import { Component, OnInit, inject, signal } from '@angular/core';
import { DetalleComponent } from '../detalle/detalle.component';
import { DatosService } from '../datos.service';
import { Foto } from '../models/foto';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-ver',
  standalone: true,
  imports: [DetalleComponent, FormsModule],
  templateUrl: './ver.component.html',
  styleUrl: './ver.component.css'
})
export class VerComponent implements OnInit{

  datos=inject(DatosService);
  foto=signal<Foto | null>(null);
  campoFecha:string='';
  fechaMaxima=signal<string>(new Date().toISOString().split('T')[0]);

  //No es una buena idea que el servicio DECIDA el CONTENIDO del mensaje. Debería decirle al componente
  //el TIPO de mensaje y que después el compomente decida cómo presentarlo, con que letras, en qué idioma...
  error=signal<string>('');

  ngOnInit(): void {
    this.datos.getFotoBien$().subscribe(
      (datos:Foto)=>{
        this.foto.set(datos);
        this.error.set('');
      }
    );

    this.datos.getFotoMal$().subscribe(
      (error:string)=>{
        this.foto.set(null);
        this.error.set(error);
      }
    );
  }

  fechaEscogida(formulario:NgForm) {
    if (formulario.invalid) return;
    this.datos.leerFoto(this.campoFecha);
  }
}
