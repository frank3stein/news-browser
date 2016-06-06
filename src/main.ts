import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NewsBrowserAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(NewsBrowserAppComponent);

