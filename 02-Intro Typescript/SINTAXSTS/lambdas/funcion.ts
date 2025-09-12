export class Funcion {
    private coordenadas:[number, number][];

    constructor(inferior:number, superior:number, incremento:number, formula:(number)=>number) {
        this.coordenadas=[];
        for (let x = inferior; x <= superior; x+=incremento) {
            let y=formula(x);
            this.coordenadas.push([x,y]);
            
        }
    }

    get puntos() {
        return this.coordenadas;
    }

}

function prueba() {
    let parabola=new Funcion(-5,5,1,x=>x*x + 8);
    for (let p of parabola.puntos) {
        console.log(`(${p[0]}, ${p[1]})`)
    }

    console.log("Onda")
    let onda=new Funcion(-5,5,1,x=>x*Math.cos(x/4));
    for (let p of onda.puntos) {
        console.log(`(${p[0]}, ${p[1]})`)
    }
}

prueba();