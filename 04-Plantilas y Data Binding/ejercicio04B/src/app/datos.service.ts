import { Injectable } from '@angular/core';
import { Cliente, TipoCliente } from './models/cliente';

@Injectable()
export class DatosService {

  /* Esta lista representa el conjunto de los datos que un hipotético servidor tiene 
  almacenada en su base de datos. Como somos probres y no tenemos ese servidor, la 
  inicio como siempre a lo bestia en el constructor del servicio */
  private listaTotal:Cliente[];

  constructor() { 
    this.listaTotal=[
      new Cliente(100,'Javier','Rodríguez','Diez',213.45,'A'),
      new Cliente(200,'Felisa','Ramos','Pérez',400,'A'),
      new Cliente(300,'Marcos','Gonaga','Sunaga',1.566,'C'),
      new Cliente(400,'Lucas','Arriaga','Ramirez',2133.48,'B'),
      new Cliente(500,'Juan','López','Ruíz',923.1,'A'),
      new Cliente(600,'Mateo','Sanz','Sanchez',993,'B'),
      new Cliente(700,'Elvira','Rodríguez','Asteguieta',118,'C'),
      new Cliente(800,'Alejandara','Fenaz','Carlet',93,'C'),
      new Cliente(900,'Balatro','Balatrez','',10,'C'),
      new Cliente(1000,'Hollow','Knight','Silson',19.90,'C'),
    ];
  }

  getTodosLosDatos() {
    return this.listaTotal;
  }

  getPorTipo(tipo:TipoCliente) {
    return this.listaTotal.filter(c=>c.tipo==tipo);
  }

  // getPorGasto(gastoMedio:number) {
  //   return this.listaTotal.filter(c=>c.gastoMedio==gastoMedio);
  // }
}
