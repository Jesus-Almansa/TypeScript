import { Component, OnInit } from '@angular/core';
import { ServicioUnoService } from '../servicio-uno.service';
import { ServicioDosService } from '../servicio-dos.service';

@Component({
  selector: 'app-tradicional',
  standalone: true,
  imports: [],
  templateUrl: './tradicional.component.html',
  styleUrl: './tradicional.component.css'
})
export class TradicionalComponent implements OnInit {

  textoUno='';
  textoDos='';

  constructor(private uno:ServicioUnoService, 
              private dos:ServicioDosService){
  }

  ngOnInit(): void {
    this.textoUno=this.uno.operacionesUno();
    this.textoDos=this.dos.operacionesDos();
  }
}
