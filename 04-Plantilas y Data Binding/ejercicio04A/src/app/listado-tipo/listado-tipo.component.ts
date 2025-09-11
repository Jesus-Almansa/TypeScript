import { Component, LOCALE_ID } from '@angular/core';
import { Cliente, TipoCliente } from '../models/cliente';
import { DatosService } from '../datos.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cliente-listado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado-tipo.component.html',
  styleUrl: './listado-tipo.component.css',
  providers:[DatosService]
})
export class ListadoTipoComponent {
  lista:Cliente[]=[];
  filtroOrigen='';

  constructor(private datos:DatosService){}

  ngOnInit() {
    registerLocaleData(es);
    this.lista=this.datos.getTodosLosDatos();
  }

  aplicarFiltroOrigenNgModel() {
    if (this.filtroOrigen=='') this.lista=this.datos.getTodosLosDatos();
    else this.lista=this.datos.getPorTipo(<TipoCliente>this.filtroOrigen);
  }

  // aplicarFiltroOrigenValue(evento:any) {
  //   this.filtroOrigen=evento.target.value;
  //   if (this.filtroOrigen=='') this.lista=this.datos.getTodosLosDatos();
  //   else this.lista=this.datos.getPorTipo(<TipoCliente>this.filtroOrigen);
  // }
}
