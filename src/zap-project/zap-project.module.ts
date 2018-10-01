import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule } from 'ngx-pagination';

import { ValidationService } from './services/validation.service';
import { VivaRealService } from './services/viva-real.service';
import { GrupoZapService } from './services/grupo-zap.service';
import { InputService } from './services/input.service';
import { ZapProjectComponent } from './zap-project.component';
import { HousesComponent } from './components/houses/houses.component';
import { INITIAL_STATES, uiRouterConfigFn } from './states.config';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        NgbModule.forRoot(),
        HttpClientModule,
        UIRouterModule.forRoot({
            states: INITIAL_STATES,
            useHash: true,
            config: uiRouterConfigFn,
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        NgxPaginationModule,
    ],
    declarations: [
        ZapProjectComponent,
        HousesComponent,
    ],
    providers: [
        InputService,
        VivaRealService,
        GrupoZapService,
        ValidationService,
        NgbActiveModal,
    ],
    bootstrap: [UIView],
})

export class ZapProjectModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
