import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[fondo]',
  standalone: true
})
export class FondoDirective {
  private elemento=inject(ElementRef);
  private renderizador=inject(Renderer2);

  @HostListener('click')
  cambiarFondo(evento:any) {
    let color="#" + this.aleatorio() + this.aleatorio() + this.aleatorio();
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color',color);
  }

  private aleatorio() {
    return (Math.floor(Math.random()*256)).toString(16);
  }

}
