import { Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[mayusculas]',
  standalone: true
})
export class MayusculasDirective implements OnInit {
  @Input() mayusculas!:boolean;
  private elemento=inject(ElementRef);
  private renderizador=inject(Renderer2);

  ngOnInit(): void {
    let texto=this.elemento.nativeElement.textContent;
    if (this.mayusculas) texto=texto.toUpperCase();
    else texto=texto.toLowerCase();
    this.renderizador.setProperty(this.elemento.nativeElement, "textContent", texto);
  }
}

