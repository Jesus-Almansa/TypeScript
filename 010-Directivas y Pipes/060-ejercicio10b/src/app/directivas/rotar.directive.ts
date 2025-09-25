import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[rotar]',
  standalone: true
})
export class RotarDirective  implements OnInit{
  @Input() rotar!:number;

  giroAplicado=0;

  private elemento=inject(ElementRef);
  private renderer=inject(Renderer2);

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'transform-origin','50% 50%');
  }
  @HostListener('click')
  oyenteClick() {
    this.giroAplicado+=this.rotar;
    this.renderer.setStyle(this.elemento.nativeElement, 'transform','rotate(' + this.giroAplicado +'deg)');

  }

}
