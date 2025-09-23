import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { DatosProductosService } from './productos/datos-productos.service';
import { DatosUsuariosService } from './usuarios/datos-usuarios.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
              provideHttpClient(),
              DatosProductosService,
              DatosUsuariosService]
};
