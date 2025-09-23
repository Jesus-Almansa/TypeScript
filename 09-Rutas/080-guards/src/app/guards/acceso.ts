import { inject } from "@angular/core";
import { DatosServidorService } from "../datos-servidor.service";

export class Acceso {
    static primero() {
        //Lo he escrito con varias líneas para que se entienda mejor la sintaxis
        return ()=>{
            const datos=inject(DatosServidorService);
            return datos.getAccesoPrimero();
        };
    }

    static segundo() {
        return ()=>inject(DatosServidorService).getAccesoSegundo();
    }

    static desbloquear() {
        return ()=>inject(DatosServidorService).getDesbloquearSalida();
    }

}

