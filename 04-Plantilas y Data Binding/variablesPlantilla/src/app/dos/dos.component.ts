import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dos',
  standalone: true,
  imports: [],
  templateUrl: './dos.component.html',
  styleUrl: './dos.component.css'
})
export class DosComponent {
  @ViewChild('cuadro') elCampo!:ElementRef<HTMLInputElement>;
  @ViewChild('parrafo') elParrafo!:ElementRef<HTMLParagraphElement>;

  texto='';

  comprobacion() {
    this.texto="El valor del cuadro de texto es " + this.elCampo.nativeElement.value + "\n";
    this.texto+="El tipo del control es " + this.elCampo.nativeElement.type + "\n";

    if (this.elCampo.nativeElement.style.backgroundColor=='red')
      this.elCampo.nativeElement.style.backgroundColor='green';
    else  
      this.elCampo.nativeElement.style.backgroundColor='red';

    this.texto+="El contenido del párrafo es " + this.elParrafo.nativeElement.textContent;
    this.elParrafo.nativeElement.textContent+='x';
  }
}
