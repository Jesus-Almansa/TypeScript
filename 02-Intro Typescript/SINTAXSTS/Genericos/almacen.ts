export class Almacen<T> {
    private datos:any[]=[];

    public add(elemento:T):boolean {
        if (this.datos.indexOf(elemento)!=-1) return false;
        this.datos.push(elemento);
        return true;
    }

    public remove(elemento:T):boolean {
        let posicion=this.datos.indexOf(elemento);
        if (posicion==1) return false;
        this.datos.splice(posicion,1);
        return true;
    }

    public get lista():T[] {
        return this.datos;
    }
}