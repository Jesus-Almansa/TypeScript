import { Component } from '@angular/core';
import { DatosService } from '../datos.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  constructor(private datos:DatosService) {

  }
  productos:Producto[]=[];
  producto:Producto | null=null;
  mal=false;

  ngOnInit(): void {
    //Me suscribo "una y otra vez". Pero como sólo necesito ejecutarlo una vez, no queda mal del todo
    this.datos.leerTodo$().subscribe({
      next:datos=>this.productos=datos,
      error:error=>this.mal=true,
      complete:()=>{}
    });

    //Aquí sí que dejo preparada la suscripción para múltiples ejecuciones
    //Me pueden enviar un producto o null...
    this.datos.getProducto$().subscribe(dato=>{
      this.producto=dato;
      this.mal=dato==null;
    });

  }

  leerProducto(id:number) {
    this.datos.leerProducto(id);
  }
}
