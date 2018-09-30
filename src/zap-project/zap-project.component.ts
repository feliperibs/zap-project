import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StateService } from '@uirouter/angular';

import { GrupoZapService } from './services/grupo-zap.service';
import { VivaRealService } from './services/viva-real.service';

@Component({
    templateUrl: './zap-project.component.html',
    styleUrls: ['./zap-project.component.scss'],
})
export class ZapProjectComponent {

    constructor(
        private state: StateService,
        private grupoZap: GrupoZapService,
        private vivaReal: VivaRealService,
    ) { }

    public getA(): void {
        this.grupoZap.getGrupoZapHouses()
            .subscribe((houses) => {
                console.log(houses);
            });
    }

    public showVivaReal(): void {
        this.vivaReal.getVivaRealHouses()
            .subscribe((houses) => {
                console.log(houses);
            });
    }

}
