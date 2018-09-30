import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ZapProjectModule } from './zap-project/zap-project.module';
import { environment } from './environments/environment';

if (environment.production === true) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(ZapProjectModule)
    .catch((err) => {
        console.error(err);
    });
