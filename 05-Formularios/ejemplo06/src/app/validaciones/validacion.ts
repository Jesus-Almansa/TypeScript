import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Validacion {
    static fechamin(fecha:string): ValidatorFn {
        return (control:AbstractControl): ValidationErrors | null => {
            if (control.value==null) return null;

            const fechaControl=Date.parse(control.value);
            if (isNaN(fechaControl)) return null;

            const fechaMin=Date.parse(fecha);
            if (isNaN(fechaMin)) return null;

            if (fechaMin <= fechaControl) return null;

            return {'fechamin':{'fechamin': fecha, 'actual': control.value}};
        }
    }
}