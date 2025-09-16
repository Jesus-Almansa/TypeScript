import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent implements OnInit, OnDestroy, OnChanges{
@Input() datoRecibido=0;

  constructor(){
    console.log("Hijo ---> constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Hijo ---> ngOnChanges");
    const cambio:SimpleChange=changes['datoRecibido'];
    if (cambio.currentValue% 2 != 0) this.datoRecibido=cambio.previousValue;
  }


  ngOnInit(): void {
    console.log("Hijo ---> ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("Hijo ---> ngOnDestroy");
  }
}