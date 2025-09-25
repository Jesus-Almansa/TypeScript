import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, inject, input } from '@angular/core';

@Directive({
  selector: '[aumentar]',
  standalone: true
})
export class AumentarDirective implements OnInit{

  @Input() aumentar! :string;
  valorOriginal='';
  private elemento=inject(ElementRef);
  private renderer=inject(Renderer2);

  ngOnInit(): void {
    this.valorOriginal=this.aumentar;
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size',this.aumentar);
  }

  @HostListener('click')
  oyenteClick(evento:any) {
    let valor=Number(this.aumentar.substring(0,this.aumentar.length-2));
    valor++;
    this.aumentar=valor  + "pt";

    this.renderer.setStyle(this.elemento.nativeElement, 'font-size',this.aumentar);
  }

  @HostListener('dblclick')
  oyenteDobleClick() {
    this.aumentar=this.valorOriginal;
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size',this.aumentar);
  }

}
