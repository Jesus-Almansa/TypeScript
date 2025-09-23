import { Component, OnInit, inject } from '@angular/core';
import { DatosProductosService } from '../datos-productos.service';
import { Producto, ResumenProducto } from '../modelo/producto';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent implements OnInit{

  private datos=inject(DatosProductosService);
  private router=inject(Router);

  //¿Por qué no he usado señales? Pues para variar, que parece que son obligatorias
  lista:ResumenProducto[] | null=[];

  ngOnInit(): void {
    //Para esta operación no merece la pena hacer "resumen$" y un "leerResumen():void"
    this.datos.getResumen$().subscribe(datos=>this.lista=datos);
    this.datos.leerResumen();
  }

  mostrarDetalle(id:number) {
    //this.router.navigateByUrl('lista-producto(detalle:detalle-producto/' + id + ')')
    this.router.navigate([{outlets:{derecha:'detalle-producto/' + id}}]);
  }
}
