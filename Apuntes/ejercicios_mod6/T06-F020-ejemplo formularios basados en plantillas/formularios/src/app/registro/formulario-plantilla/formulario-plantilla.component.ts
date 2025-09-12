import { Component, inject } from '@angular/core';
import { Registro, Tipo } from '../models/registro';
import { KeyValuePipe } from '@angular/common';
import { DatosService } from '../datos.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario-plantilla',
  standalone: true,
  imports: [KeyValuePipe, FormsModule],
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
}
