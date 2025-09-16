import { Component, OnDestroy, OnInit } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent implements OnInit, OnDestroy{

  valor=0;

  constructor(){
    console.log("Padre ---> constructor");
  }

  ngOnInit(): void {
    console.log("Padre ---> ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("Padre ---> ngOnDestroy");
  }

  incrementar() {
    this.valor+=3;
  }
}