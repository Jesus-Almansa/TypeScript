import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { Foto } from '../models/foto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrl: './ver.component.css'
})
export class VerComponent {

  constructor(private datos:DatosService){}

  foto:Foto | null=null;
  campoFecha:string='';
  fechaMaxima:string=new Date().toISOString().split('T')[0];

  //No es una buena idea que el servicio DECIDA el CONTENIDO del mensaje. Debería decirle al componente
  //el TIPO de mensaje y que después el compomente decida cómo presentarlo, con que letras, en qué idioma...
  error='';

  ngOnInit(): void {
    this.datos.getFotoBien$().subscribe(
      (datos:Foto)=>{
        this.foto=datos;
        this.error='';
      }
    );

    this.datos.getFotoMal$().subscribe(
      (error:string)=>{
        this.foto=null;
        this.error=error;
      }
    );
  }

  fechaEscogida(formulario:NgForm) {
    if (formulario.invalid) return;
    this.datos.leerFoto(this.campoFecha);
  }
}
