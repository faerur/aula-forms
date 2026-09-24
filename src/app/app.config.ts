import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideLuxonDateAdapter } from '@angular/material-luxon-adapter'
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localePt)

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideLuxonDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'pt'}, provideHttpClient()
  ]
};
