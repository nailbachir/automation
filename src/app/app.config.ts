import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {

  providers: [
    provideAnimations(),
    provideRouter([
      // your routes here
    ]),
    importProvidersFrom(MatCardModule, BrowserAnimationsModule),
  ],
};