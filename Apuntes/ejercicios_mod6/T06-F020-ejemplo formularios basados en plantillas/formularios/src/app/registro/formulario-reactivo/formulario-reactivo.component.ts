import { Component} from '@angular/core';
import { Tipo } from '../models/registro';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [],
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css', '../estilos/formulario.css']
})
export class FormularioReactivoComponent  {
  
  valoresTipo:string[]=Object.values(Tipo);

  traducirTipo(valor:string):Tipo {
    if (valor=='E') return Tipo.EXPERTO;
    if (valor=='M') return Tipo.MEDIO;
    if (valor=='P') return Tipo.PRINCIPIANTE;
    return Tipo.DESCONOCIDO;
  }

}



