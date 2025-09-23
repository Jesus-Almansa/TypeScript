import { Component, OnInit, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-negro',
  standalone: true,
  imports: [],
  templateUrl: './negro.component.html',
  styleUrl: './negro.component.css'
})
export class NegroComponent implements OnInit {

  mensaje:string | null=null;
  private ar=inject(ActivatedRoute);
  
  ngOnInit(): void {
    this.ar.paramMap.subscribe(p=>this.mensaje=p.get('valor'));
  }
}
