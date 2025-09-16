import { ApplicationConfig } from '@angular/core';

import { ServicioTresService } from './servicio-tres.service';
import { ServicioUnoService } from './servicio-uno.service';
import { ServicioDosService } from './servicio-dos.service';

export const appConfig: ApplicationConfig = {
  providers: [ServicioUnoService, ServicioDosService, ServicioTresService]
};
