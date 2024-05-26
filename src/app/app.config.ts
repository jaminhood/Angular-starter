import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app.routes';
// import { counterFeature } from './stste/counter/counter.feature';
import { UserEEffects } from './stste/user/user.effect';
import userFeature from './stste/user/user.feature';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState(userFeature),
    provideEffects([UserEEffects]),
  ],
};
