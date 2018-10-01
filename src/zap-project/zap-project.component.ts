import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './zap-project.component.html',
    styleUrls: ['./zap-project.component.scss'],
})
export class ZapProjectComponent {
    public group: string;
    public showViva: boolean = false;
    public showZap: boolean = false;

    constructor() { }

    public getViva(group: string): void {
        if (this.showViva === true) {
            this.showViva = false;
        } else {
            this.showViva = true;
            this.showZap = false;
        }
    }

    public getZap(group: string): void {
        if (this.showZap === true) {
            this.showZap = false;
        } else {
            this.showZap = true;
            this.showViva = false;
        }
    }

}
