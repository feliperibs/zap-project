import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { VivaRealService } from './viva-real.service';
import { InputService } from './input.service';

describe('GrupoZapService', () => {
    let service: VivaRealService;
    let valueInputServiceSpy: jasmine.SpyObj<InputService>;

    beforeEach(() => {
        const spyInputService = jasmine.createSpyObj('InputService', ['getHouses']);

        TestBed.configureTestingModule({
            providers: [
                GrupoZapService,
                { provide: InputService, useValue: spyInputService },
            ],
        });
        service = TestBed.get(GrupoZapService);
        valueInputServiceSpy = TestBed.get(InputService);
    });

    it('should be created', () => {
        expect(service)
            .toBeDefined();
    });
});
