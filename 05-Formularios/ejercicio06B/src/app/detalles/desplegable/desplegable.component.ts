import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Producto } from '../../models/producto';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'detalle-desplegable',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './desplegable.component.html',
  styleUrls: [ '../estilos/formulario.css', './desplegable.component.css']
})
export class DesplegableComponent implements OnChanges{

  @Input() lista:Producto[]=[];
  @Input() referencia='';
  @Input() mensaje='Texto por defecto';
  //Un caso muy particular para cuando se sabe que el texto del "option" actual ha sido modificado. 
  @Input() textoOpcionActual:string | null=null;

  @Output() datoSeleccionado=new EventEmitter<string>();

  hacerSubmit(formulario:NgForm) {
    if (formulario.invalid) return;
    this.datoSeleccionado.emit(this.referencia);
  }

  /* Un caso muy particular para cuando se sabe que el texto del "option" actual ha sido modificado...
   * ... y de paso me da una excusa para poner un ejemplo de "On Change" */
  ngOnChanges(cambios: SimpleChanges): void {
    if (cambios['textoOpcionActual'] && cambios['textoOpcionActual'].currentValue) {
      for (let p of this.lista) {
        if (p.referencia==this.referencia) {
          p.nombre=cambios['textoOpcionActual'].currentValue;
          return;
        }
      }
    }
  }

}