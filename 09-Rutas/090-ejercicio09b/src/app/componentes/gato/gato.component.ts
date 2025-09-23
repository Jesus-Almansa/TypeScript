import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gato',
  standalone: true,
  imports: [],
  templateUrl: './gato.component.html',
  styleUrl: './gato.component.css'
})
export class GatoComponent implements OnInit{

  private ar=inject(ActivatedRoute);
  deNuevo=signal(false);

  ngOnInit(): void {
    this.ar.data.subscribe(datos=>{
      if (datos['deNuevo']) this.deNuevo.set(true);
    });
  }

}
