import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-rojo',
  standalone: true,
  imports: [],
  templateUrl: './rojo.component.html',
  styleUrl: './rojo.component.css'
})
export class RojoComponent implements OnInit {

  private activatedRoute=inject(ActivatedRoute);
  private router=inject(Router);
 
  mensaje='';

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(ruta=>this.mensaje=ruta.toString());
  }

  verde() {
    console.log('La ruta actual es ' + this.router.url)
    this.router.navigate(['/verde']);
  }

  naranjaRojo() {
    this.router.navigateByUrl('/naranja/rojo');
  }

  verdeYRojo() {
    this.router.navigate([{outlets:{primary:'verde', secundario:'rojo-sec'}}]);
    // this.router.navigate([{outlets:{secundario:'rojo-sec', primary:'verde'}}]); // Esto también funciona
    //this.router.navigateByUrl('/verde(secundario:rojo-sec)');
  }

}
