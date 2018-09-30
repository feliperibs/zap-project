import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StateService } from '@uirouter/angular';

import { GrupoZapService } from '../../services/grupo-zap.service';

@Component({
    templateUrl: './grupo-zap.component.html',
    styleUrls: ['./grupo-zap.component.scss'],
    selector: 'imzap-grupo-zap',
})
export class GrupoZaptComponent {

    constructor(
        private state: StateService,
        private grupoZap: GrupoZapService,
    ) { }

    public getA(): void {
        this.grupoZap.getGrupoZapHouses()
            .subscribe((houses) => {
                console.log(houses);
            });
    }

}
