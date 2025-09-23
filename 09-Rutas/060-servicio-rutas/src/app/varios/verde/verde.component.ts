import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verde',
  standalone: true,
  imports: [],
  templateUrl: './verde.component.html',
  styleUrl: './verde.component.css'
})
export class VerdeComponent implements OnInit {
  private ar=inject(ActivatedRoute);
  texto='';
  direccion='';

  ngOnInit(): void {
    this.ar.url.subscribe(url=>this.direccion=url.toString());

    this.ar.data.subscribe(datos=>{
      for (let campo in datos) {
        if (this.texto!='') this.texto+=' / ';
        this.texto+=campo + '=' + datos[campo];
      }
    });

    
  }
}
