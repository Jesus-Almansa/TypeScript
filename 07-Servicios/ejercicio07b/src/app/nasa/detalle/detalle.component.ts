import { Component, Input, inject } from '@angular/core';
import { Foto } from '../models/foto';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  @Input() foto:Foto | null=null;
  
  //Una tontería para poder reproducir vídeos de YouTube
  private sanitizer=inject(DomSanitizer);

  sanearReferencia(url:string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
