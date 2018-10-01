import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgbActiveModal, NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

import { HouseInput } from '../../model/house-input';
import { VivaRealService } from '../../services/viva-real.service';
import { GrupoZapService } from '../../services/grupo-zap.service';

@Component({
    selector: 'imzap-houses-template',
    templateUrl: './houses.component.html',
    styleUrls: ['./houses.component.scss'],
    providers: [NgbCarouselConfig],
})
export class HousesComponent implements OnInit {

    @Input() public group: string;

    public houses: Array<HouseInput>;
    public page: number = 1;
    public totalItems: number;

    constructor(
        private vivaReal: VivaRealService,
        private zap: GrupoZapService,
        private config: NgbCarouselConfig,
        private modalService: NgbModal,
        private translate: TranslateService,
        private modal: NgbActiveModal,
    ) {
        translate.setDefaultLang('pt');
        config.interval = 0;
    }

    public ngOnInit(): void {
        this.showHouses();
    }

    public showHouses(): void {
        if (this.group === 'viva') {
            this.vivaReal.getVivaRealHouses()
                .subscribe((houses) => {
                    this.houses = houses;
                    this.totalItems = this.houses.length;
                });
        }
        if (this.group === 'zap') {
            this.zap.getGrupoZapHouses()
                .subscribe((houses) => {
                    this.houses = houses;
                    this.totalItems = this.houses.length;
                });
        }

    }

    public openModal(content): void {
        this.modal = this.modalService.open(content, { centered: true });
    }

    public closeModal(): void {
        this.modal.dismiss();
    }

}
