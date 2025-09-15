import { Component, inject, signal } from '@angular/core';
import { Registro, Tipo } from '../models/registro';
import { DatePipe, KeyValuePipe, NgFor } from '@angular/common';
import { DatosService } from '../datos.service';
import { FormsModule, NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-formulario-plantilla',
  standalone: true,
  imports: [KeyValuePipe, FormsModule, DatePipe],
  templateUrl: './formulario-plantilla.component.html',
  styleUrls: ['./formulario-plantilla.component.css', '../estilos/formulario.css']
})
export class FormularioPlantillaComponent  {

  /* https://stackoverflow.com/questions/59289095/use-of-enums-in-angular-8-html-template-for-ngif
   * Esta forma de hacerlo no será habitual (querrás mostrar un texto distinto, en vez del nombre de 
   * elemento de la enumeración), pero quería usarlo al menos en un ejemplo */
  readonly Tipo=Tipo;
  private datos=inject(DatosService);
  dato:Registro=new Registro(null,null,null,null,null,null,Tipo.DESCONOCIDO);
  fechaMin=signal(new Date(Date.now()-365*24*3600*1000));

  mensajeEnviado=signal(false);
  mensajeError=signal(false);

  comprobar(campo:NgModel, propiedad:string) {
    return campo.valid || campo.pristine || !campo.errors?.[propiedad]
  }

  enviarDatos(formulario:NgForm) {
    if (formulario.invalid) return;

    if (this.datos.addRegistro(this.dato)) {
      formulario.reset();
      this.mensajeEnviado.set(true);
      this.mensajeError.set(false);
    }
    else {
      this.mensajeEnviado.set(false);
      this.mensajeError.set(true);
    }
  }
}
