import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{
  private ar=inject(ActivatedRoute);
  valor=signal<number | null>(null);

  ngOnInit(): void {
    this.ar.paramMap.subscribe(pm=>{
      this.valor.set(Number(pm.get('valor')));
    });
  }
}
