import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosUsuariosService } from '../datos-usuarios.service';
import { Usuario } from '../modelo/usuario';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent implements OnInit{

  private ar=inject(ActivatedRoute);
  private datos=inject(DatosUsuariosService);

  //No he usados señales porque no he querido.
  error=false;
  usuario:Usuario | null =null;

  ngOnInit(): void {
    this.ar.paramMap.subscribe(pm=>{
      this.error=false;

      if (pm.get('valor')) this.datos.leerUsuario$(Number(pm.get('valor'))).subscribe({
        next:dato=>this.usuario=dato,
        error:e=>{
          this.error=true;
          this.usuario=null;
        }
      });
    });
  }
}