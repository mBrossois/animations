import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { applyPolyfills, defineCustomElements } from "puik/components/loader";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

applyPolyfills().then(() => defineCustomElements(window));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
