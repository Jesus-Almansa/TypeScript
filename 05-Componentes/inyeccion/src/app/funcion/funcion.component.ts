import { Component, OnInit, inject } from '@angular/core';
import { ServicioUnoService } from '../servicio-uno.service';
import { ServicioDosService } from '../servicio-dos.service';

@Component({
  selector: 'app-funcion',
  standalone: true,
  imports: [],
  templateUrl: './funcion.component.html',
  styleUrl: './funcion.component.css'
})
export class FuncionComponent implements OnInit {

  textoUno='';
  textoDos='';
  private uno=inject(ServicioUnoService);
  private dos=inject(ServicioDosService); 

  ngOnInit(): void {
    this.textoUno=this.uno.operacionesUno();
    this.textoDos=this.dos.operacionesDos();
  }
}
