import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { rutas } from './rutas';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(rutas)]
};
