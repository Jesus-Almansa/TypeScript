import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[minimoV2]',
  standalone: true
})
export class MinimoV2Directive {
  @Input() minimoV2=10;

  private elemento=inject(ElementRef);

  @HostBinding('style.background-color') 
  coloractual!:string;  //Hace referencia pero no lo cambia...
  //coloractual='blue';

  @HostListener("keyup")
  teclaPulsada(evento:any) {
    let color:string;

    if (this.elemento.nativeElement.value.length<this.minimoV2) color='#fbb';
    else color=''; //Aplica lo que tenga definido en la hoja de estilos...

    this.coloractual=color;
  }
}
