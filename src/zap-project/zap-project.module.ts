import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselConfig, NgbModule, NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule, UIView } from '@uirouter/angular';

import { ValidationService } from './services/validation.service';
import { VivaRealService } from './services/viva-real.service';
import { GrupoZapService } from './services/grupo-zap.service';
import { InputService } from './services/input.service';
import { ZapProjectComponent } from './zap-project.component';
import { VivaRealComponent } from './components/viva-real/viva-real.component';
import { INITIAL_STATES, uiRouterConfigFn } from './states.config';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        UIRouterModule.forRoot({
            states: INITIAL_STATES,
            useHash: true,
            config: uiRouterConfigFn,
        }),
    ],
    declarations: [
        ZapProjectComponent,
        VivaRealComponent,
    ],
    providers: [
        InputService,
        VivaRealService,
        GrupoZapService,
        ValidationService,
        NgbCarouselConfig,
        NgbPaginationConfig,
    ],
    bootstrap: [UIView],
})

export class ZapProjectModule { }
