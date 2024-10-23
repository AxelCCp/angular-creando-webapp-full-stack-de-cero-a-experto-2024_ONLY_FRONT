import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/items.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore({
        
        //73 - aqui se configuran manualmente los store de redux.
        //<nombre del store> : <nombre del reducer>   // el nombre counter va de la mano con los nombres de counter.component q estan en el constructor.
        counter: counterReducer
        
    }), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
