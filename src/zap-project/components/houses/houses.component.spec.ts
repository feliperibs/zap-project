import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs/Subscription';
import { NgbActiveModal, NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { HouseInput } from '../../model/house-input';
import { VivaRealService } from '../../services/viva-real.service';
import { GrupoZapService } from '../../services/grupo-zap.service';
import { HousesComponent } from './houses.component';
import { Observable } from 'rxjs';

describe('HousesComponent', () => {
    let valueTranslateServiceSpy: jasmine.SpyObj<TranslateService>;
    let valueNgbActiveModalSpy: jasmine.SpyObj<NgbActiveModal>;
    let valueNgbModalSpy: jasmine.SpyObj<NgbModal>;
    let valueVivaRealServiceSpy: jasmine.SpyObj<VivaRealService>;
    let valueGrupoZapServiceSpy: jasmine.SpyObj<GrupoZapService>;
    let fixture: ComponentFixture<HousesComponent>;
    let component: HousesComponent;

    beforeEach(() => {
        const spyTranslateService = jasmine.createSpyObj('TranslateService', ['setDefaultLang']);
        const spyNgbActiveModal = jasmine.createSpyObj('NgbActiveModal', ['close']);
        const spyNgbModal = jasmine.createSpyObj('NgbModal', ['open']);
        const spyVivaRealService = jasmine.createSpyObj('VivaRealService', ['getVivaRealHouses']);
        const spyGrupoZapService = jasmine.createSpyObj('GrupoZapService', ['getGrupoZapHouses']);

        TestBed.configureTestingModule({
            declarations: [HousesComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            providers: [
                { provide: TranslateService, useValue: spyTranslateService },
                { provide: NgbActiveModal, useValue: spyNgbActiveModal },
                { provide: NgbModal, useValue: spyNgbModal },
                { provide: VivaRealService, useValue: spyVivaRealService },
                { provide: GrupoZapService, useValue: spyGrupoZapService },
            ],
            imports: [
                NgxPaginationModule,
                TranslateModule,
            ],
        });

        valueTranslateServiceSpy = TestBed.get(TranslateService);
        valueNgbActiveModalSpy = TestBed.get(NgbActiveModal);
        valueNgbModalSpy = TestBed.get(NgbModal);
        valueVivaRealServiceSpy = TestBed.get(VivaRealService);
        valueGrupoZapServiceSpy = TestBed.get(GrupoZapService);
        fixture = TestBed.createComponent(HousesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component)
            .toBeTruthy();
    });

    it('should show Viva Real houses', () => {
        component.group = 'viva';
        const retorno = [{ teste: '123' }];

        valueVivaRealServiceSpy.getVivaRealHouses.and.returnValue(Observable.of(retorno));
        component.showHouses();

        expect(component.houses)
            .toBeDefined();
    });

    it('should show Grupo Zap houses', () => {
        component.group = 'zap';
        const retorno = [{ teste: '123' }];

        valueGrupoZapServiceSpy.getGrupoZapHouses.and.returnValue(Observable.of(retorno));
        component.showHouses();

        expect(component.houses)
            .toBeDefined();
    });
});
