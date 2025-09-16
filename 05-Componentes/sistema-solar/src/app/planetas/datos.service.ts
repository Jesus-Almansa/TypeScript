import { Injectable } from '@angular/core';
import { Planeta, TipoPlaneta } from './models/planeta';
import { Resumen } from './models/resumen';

@Injectable()
export class DatosService {
  private lista:Planeta[];

  constructor() {
    this.lista=[
      {
        id: 'mercurio',
        castellano:'Mercurio',
        frances: 'Mercure',
        ingles: 'Mercury',
        lunas: [],
        semiejeMayor: 57909050,
        perihelio: 46001200,
        afelio: 69816900,
        excentricidad: 0.2056,
        inclinacion: 7,
        masa: {
            valor: 3.30114,
            exponente: 23
        },
        volumen: {
            valor: 6.083,
            exponente: 10
        },
        densidad: 5.4291,
        gravedad: 3.7,
        radioMedio: 2439.4,
        tipo: TipoPlaneta.PLANETA,
        puntuacion:0
      },
      {
        id: 'venus',
        castellano:'Venus',
        frances: 'Vénus',
        ingles: 'Venus',
        lunas: [],
        semiejeMayor: 108208475,
        perihelio: 107477000,
        afelio: 108939000,
        excentricidad: 0.0067,
        inclinacion: 3.39,
        masa: {
            valor: 4.86747,
            exponente: 24
        },
        volumen: {
            valor: 9.2843,
            exponente: 11
        },
        densidad: 5.243,
        gravedad: 8.87,
        radioMedio: 6051.8,
        tipo: TipoPlaneta.PLANETA,
        puntuacion:0
      },
      {
        id: 'tierra',
        castellano:'La Tierra',
        frances: 'La Terre',
        ingles: 'Earth',
        lunas: ['La Luna'],
        semiejeMayor: 149598023,
        perihelio: 147095000,
        afelio: 152100000,
        excentricidad: 0.0167,
        inclinacion: 0,
        masa: {
            valor: 5.97237,
            exponente: 24
        },
        volumen: {
            valor: 1.08321,
            exponente: 12
        }
        ,
        densidad: 5.5136,
        gravedad: 9.8,
        radioMedio: 6371.0084,
        tipo: TipoPlaneta.PLANETA,
        puntuacion:0
      },
      {
        id: 'mars',
        castellano:'Marte',
        frances: 'Mars',
        ingles: 'Mars',
        lunas: ['Phobos','Deimos'],
        semiejeMayor: 227939200,
        perihelio: 206700000,
        afelio: 249200000,
        excentricidad: 0.0935,
        inclinacion: 1.85,
        masa: {
            valor: 6.41712,
            exponente: 23
        },
        volumen: {
            valor: 1.6318,
            exponente: 11
        },
        densidad: 3.9341,
        gravedad: 3.71,
        radioMedio: 3389.5,
        tipo: TipoPlaneta.PLANETA,
        puntuacion:0
      },
      {
        id: 'jupiter',
        castellano:'Júpiter',
        frances: 'Jupiter',
        ingles: 'Jupiter',
        lunas: ['Io','Europa','Ganimedes','Calisto','Amaltea','Himalia','Elara','Pasiphae','Sinope'],
        semiejeMayor: 778340821,
        perihelio: 740379835,
        afelio: 816620000,
        excentricidad: 0.0489,
        inclinacion: 1.304,
        masa: {
            valor: 1.89819,
            exponente: 27
        },
        volumen: {
            valor: 1.43128,
            exponente: 15
        },
        densidad: 1.3262,
        gravedad: 24.79,
        radioMedio: 69911,
        tipo: TipoPlaneta.PLANETA,
        puntuacion:0
      },
      {
        id: 'saturno',
        castellano:'Saturno',
        frances: 'Saturne',
        ingles: 'Saturn',
        lunas: ['Titán', 'Rea', 'Jápeto', 'Dione', 'Tetis', 'Encélado', 'Mimas', 'Hiperión', 'Febe'],
        semiejeMayor: 1426666422,
        perihelio: 1349823615,
        afelio: 1503509229,
        excentricidad: 0.0565,
        inclinacion: 2.485,
        masa: {
            valor: 5.68336,
            exponente: 26
        },
        volumen: {
            valor: 8.2713,
            exponente: 14
        },
        densidad: 0.6871,
        gravedad: 10.44,
        radioMedio: 58232,
        tipo: TipoPlaneta.PLANETA,
        puntuacion:0
      },
      {
        id: 'urano',
        castellano:'Urano',
        frances: 'Uranus',
        ingles: 'Uranus',
        lunas: ['Ariel','Umbriel','Titania','Oberon','Miranda','Calibán'],
        semiejeMayor: 2870658186,
        perihelio: 2734998229,
        afelio: 3006318143,
        excentricidad: 0.0457,
        inclinacion: 0.772,
        masa: {
            valor: 8.68127,
            exponente: 25
        },
        volumen: {
            valor: 6.833,
            exponente: 13
        },
        densidad: 1.27,
        gravedad: 8.87,
        radioMedio: 25362,
        tipo: TipoPlaneta.PLANETA,
        puntuacion:0
      },
      {   
        id: 'neptuno',
        castellano:'Neptuno',
        frances: 'Neptune',
        ingles: 'Neptune',
        lunas: ['Triton', 'Néreida','Nayade'],
        semiejeMayor: 4498396441,
        perihelio: 4459753056,
        afelio: 4537039826,
        excentricidad: 0.0113,
        inclinacion: 1.769,
        masa: {
            valor: 1.02413,
            exponente: 26
        },
        volumen: {
            valor: 6.254,
            exponente: 13
        }
        ,
        densidad: 1.638,
        gravedad: 11.15,
        radioMedio: 24622,
        tipo: TipoPlaneta.PLANETA,
        puntuacion:0
      },
      {
        id: 'pluton',
        castellano:'Plutón',
        frances: 'Pluton',
        ingles: 'Pluto',
        lunas: ['Caronte'],
        semiejeMayor: 5906440628,
        perihelio: 4436756954,
        afelio: 7376124302,
        excentricidad: 0.2488,
        inclinacion: 17.16,
        masa: {
            valor: 1.303,
            exponente: 22
        },
        volumen: {
            valor: 7.15,
            exponente: 9
        },
        densidad: 1.89,
        gravedad: 0.62,
        radioMedio: 1188.3,
        tipo: TipoPlaneta.PLANETA_ENANO,
        puntuacion:0
      }
    ];
  }

  getPlanetas() {
    return this.lista;
  }

  getResumenPlanetas() {
    let resumen:Resumen[]=[];
    for (let p of this.lista)
      resumen.push({id:p.id, castellano:p.castellano})
    return resumen;
  }

  getPlaneta(id:string):Planeta | null {
    for (let p of this.lista)
      if (p.id==id) return p;

    return null;
  }

  setPuntuacion(id:string, puntuacion:number) {
    let planeta=this.getPlaneta(id);
    if (planeta!=null) planeta.puntuacion=puntuacion;
  }
}
