import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosProductosService } from '../datos-productos.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent implements OnInit{

  private ar=inject(ActivatedRoute);
  private datos=inject(DatosProductosService);

  //No he usados señales porque no he querido.
  error=false;
  producto:Producto | null =null;

  ngOnInit(): void {

    this.datos.getProducto$().subscribe(
      dato=>{
        if (dato!=null) {
          this.producto=dato;
          this.error=false;
        }
        else {
          this.producto=null;
          this.error=true;
        }
      }
    );

    //Me suscribo a paramMap, y cuando llegue un dato, ejecuto la petición al servicio.
    //A la que me he suscrito previamente :) Tooodo es asíncrono. Aunque parezca mentira,
    //los observables te facilitan la vida al organizar el código.
    this.ar.paramMap.subscribe(pm=>{
      if (pm.get('valor')) this.datos.leerProducto(Number(pm.get('valor')))
    });
  }
}
