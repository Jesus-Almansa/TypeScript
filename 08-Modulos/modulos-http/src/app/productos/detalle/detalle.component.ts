import { Component, Input } from '@angular/core';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  @Input() producto:Producto | null=null;
}
