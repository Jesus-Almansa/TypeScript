import { Component, OnInit, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-azul',
  standalone: true,
  imports: [],
  templateUrl: './azul.component.html',
  styleUrl: './azul.component.css'
})
export class AzulComponent implements OnInit{
  private ar=inject(ActivatedRoute);
  texto='';
  direccion='';

  ngOnInit(): void {

    //No suele ser una buena idea... incluso en "ngOnInit"
    this.direccion=this.ar.snapshot.url.toString();

    let datos=this.ar.snapshot.data;
    for (let campo in datos) {
      if (this.texto!='') this.texto+=' / ';
      this.texto+=campo + '=' + datos[campo];
    }
  }
}
