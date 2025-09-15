import { Component, inject, OnInit, signal } from '@angular/core';
import { DatosService } from '../../datos.service';
import { DesplegableComponent } from '../../detalles/desplegable/desplegable.component';
import { PantallaComponent } from '../../detalles/pantalla/pantalla.component';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [DesplegableComponent, PantallaComponent],
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})

export class ModificarComponent implements OnInit {
  producto: Producto | null = null;
  private datos = inject(DatosService);
  bien = signal(false);
  mal = signal(false);
  lista = signal<Producto[]>([]);

  ngOnInit(): void {
    this.lista.set(this.datos.leerTodos());
  }

  // Primer output: solo selecciona
  productoSeleccionado(referencia: string) {
    if (!referencia) return;
    const p = this.lista().find(p => p.referencia === referencia);
    this.producto = p ? { ...p } : null; // clonar para no tocar lista original
    this.bien.set(false);
    this.mal.set(false);
  }

  // Segundo output: guardar cambios
  guardarCambios(p: Producto) {
    if (this.datos.modificar(p)) {
      this.bien.set(true);
      this.mal.set(false);
    } else {
      this.bien.set(false);
      this.mal.set(true);
    }
  }
}
