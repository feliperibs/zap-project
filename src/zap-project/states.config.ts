import { Injector } from '@angular/core';
import { UIRouter, UIView } from '@uirouter/angular';

import { ZapProjectComponent } from './zap-project.component';

export const INITIAL_STATES = [
    {
        name: 'home',
        url: '/home',
        component: ZapProjectComponent,
    },
];

export function uiRouterConfigFn(router: UIRouter, injector: Injector): void {
    router.urlService.rules.otherwise({ state: 'home' });
}
