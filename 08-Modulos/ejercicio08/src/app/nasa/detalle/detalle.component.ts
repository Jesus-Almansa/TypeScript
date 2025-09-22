import { Component, Input } from '@angular/core';
import { Foto } from '../models/foto';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  @Input() foto:Foto | null=null;
  
  //Una tontería para poder reproducir vídeos de YouTube
  constructor(private sanitizer:DomSanitizer){}

  sanearReferencia(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
