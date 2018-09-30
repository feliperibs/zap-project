import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { StateService } from '@uirouter/angular';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { HouseInput } from '../../model/house-input';
import { VivaRealService } from '../../services/viva-real.service';

@Component({
    selector: 'imzap-viva-real',
    templateUrl: './viva-real.component.html',
    styleUrls: ['./viva-real.component.scss'],
    providers: [NgbCarouselConfig],
})
export class VivaRealComponent implements OnInit {
    public houses: Array<HouseInput>;
    public test: HouseInput;
    public page = 2;

    constructor(
        private state: StateService,
        private vivaReal: VivaRealService,
        private config: NgbCarouselConfig,
    ) {
        config.interval = 0;
    }

    public ngOnInit(): void {
        this.showVivaReal();
    }

    public showVivaReal(): void {
        this.vivaReal.getVivaRealHouses()
            .subscribe((houses) => {
                this.houses = houses;
                this.test = houses[0];
            });
    }

}
