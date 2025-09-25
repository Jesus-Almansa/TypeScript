import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[tabla]',
  standalone: true
})
export class TablaMultiplicarDirective implements OnInit {

  @Input() tabla=7;

  private elemento=inject(ElementRef);
  private renderizador=inject(Renderer2);

  private templateRef=inject(TemplateRef<any>);
  private viewContainer=inject(ViewContainerRef);

  ngOnInit(): void {
    //this.viewContainer.clear();

    for (let i = 0; i <= 10; i++) {
      console.log("--------- El valor de i es " + i);
      
      this.viewContainer.createEmbeddedView(this.templateRef, {$implicit: `${this.tabla} x ${i} = ${this.tabla * i}`});
    }

  }
}
