import { Component, inject, signal} from '@angular/core';
import { Registro, Tipo } from '../models/registro';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosService } from '../datos.service';
import { Validacion } from '../../validaciones/validacion';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css', '../estilos/formulario.css']
})
export class FormularioReactivoComponent  {
  
  valoresTipo:string[]=Object.values(Tipo);
  datos=inject(DatosService);
  formBuilder=inject(FormBuilder);

  mensajeEnviado=signal(false);
  mensajeError=signal(false);

  formulario=this.formBuilder.group({
    identificador:['',[Validators.required, Validators.min(1)]],
    nombre:['',[Validators.required, Validators.minLength(3),Validators.maxLength(40)]],
    apellidos:['',[Validators.required,Validators.minLength(3),Validators.maxLength(80)]],
    correo:['',[Validators.required, Validators.email]],
    fecha:[new Date().toISOString().split('T')[0], [Validators.required, Validacion.fechamin('2023-12-27')]],
    salario:['',[Validators.min(12000),Validators.max(100000)]],
    tipo:['D',Validators.required]
  });

  /*formulario=new FormGroup({
    identificador:new FormControl('',[Validators.required, Validators.min(1)]),
    nombre:new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(40)]),
    apellidos:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(80)]),
    correo:new FormControl('',[Validators.required, Validators.email]),
    fecha:new FormControl(new Date().toISOString().split('T')[0], [Validators.required, Validacion.fechamin('2023-12-27')]),
    salario:new FormControl('',[Validators.min(12000),Validators.max(100000)]),
    tipo:new FormControl('D',Validators.required)
  });*/

  traducirTipo(valor:string):Tipo {
    if (valor=='E') return Tipo.EXPERTO;
    if (valor=='M') return Tipo.MEDIO;
    if (valor=='P') return Tipo.PRINCIPIANTE;
    return Tipo.DESCONOCIDO;
  }

  enviarDatos() {
    if (this.formulario.invalid) return;

    let r=new Registro(
      this.formulario.value.identificador==null?null:Number.parseInt(this.formulario.value.identificador),
      this.formulario.value.nombre || null,
      this.formulario.value.apellidos || null,
      this.formulario.value.correo || null,
      new Date(this.formulario.value.fecha || ''),
      this.formulario.value.salario==null?null:Number.parseFloat(this.formulario.value.salario),
      this.traducirTipo(this.formulario.value.tipo || 'D')
    );

    if(this.datos.addRegistro(r)) {
      this.formulario.reset();
      this.mensajeEnviado.set(true);
      this.mensajeError.set(false);
    }
    else {
      this.mensajeEnviado.set(false);
      this.mensajeError.set(true);
    }
  }

  comprobar(campo:FormControl, propiedad:string) {
    return campo.valid || campo.pristine || !campo.hasError(propiedad);
  }

  comprobarCorto(nombreCampo:string, propiedad:string) {
    const controles=this.formulario.controls as {[key:string]: AbstractControl};
    const campo=controles[nombreCampo];
    return campo.valid || campo.pristine || !campo.errors?.[propiedad];
  }
}



