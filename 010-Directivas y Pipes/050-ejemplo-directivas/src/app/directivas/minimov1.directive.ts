import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[minimoV1]',
  standalone: true
})
export class MinimoV1Directive {
  @Input() minimoV1=10;

  private elemento=inject(ElementRef);
  private renderizador=inject(Renderer2);

  @HostListener("keyup")
  teclaPulsada(evento:any) {
    let color:string;

    if (this.elemento.nativeElement.value.length<this.minimoV1) color='#fbb';
    else color=''; //Aplica lo que tenga definido en la hoja de estilos...

    this.renderizador.setStyle(this.elemento.nativeElement,'background-color',color);
  }
}
