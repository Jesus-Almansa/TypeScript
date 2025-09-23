import { Component, OnInit, inject } from '@angular/core';
import { DatosUsuariosService } from '../datos-usuarios.service';
import { ResumenUsuario } from '../modelo/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent implements OnInit{
  
  private datos=inject(DatosUsuariosService);
  private router=inject(Router);

  lista:ResumenUsuario[] | null=[];

  ngOnInit(): void {
    this.datos.leerResumen$().subscribe({
      next:datos=>this.lista=datos,
      error:e=>this.lista=null
    });
  }

  mostrarDetalle(id:number) {
    //this.router.navigateByUrl('lista-producto(detalle:detalle-usuario/' + id + ')')
    this.router.navigate([{outlets:{derecha:'detalle-usuario/' + id}}]);
  }
}
