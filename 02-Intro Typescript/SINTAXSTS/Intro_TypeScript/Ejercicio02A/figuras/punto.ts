export class Punto {
    private x:number;
    private y:number;

    public constructor(x:number, y:number){
        this.x=x;
        this.y=y;
    }

    dibujar():string{
        return `(${this.x}, ${this.y})`
    }
    longitud():number{
        return 0;
    }
    distancia(otro:Punto):number{
        return Math.sqrt(
            Math.pow(this.x-otro.x,2) +
            Math.pow(this.y-otro.y,2)
        );
    }
}