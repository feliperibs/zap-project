import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { GrupoZapService } from './grupo-zap.service';
import { InputService } from './input.service';
import { ValidationService } from './validation.service';
import { HouseInput } from '../model/house-input';
import { Location } from '../model/location';

describe('GrupoZapService', () => {
    let service: GrupoZapService;
    let valueInputServiceSpy: jasmine.SpyObj<InputService>;
    let valueValidationServiceSpy: jasmine.SpyObj<ValidationService>;

    beforeEach(() => {
        const spyInputService = jasmine.createSpyObj('InputService', ['getHouses']);
        const spyValidationService = jasmine.createSpyObj('ValidationService', ['locationValidate', 'getUsableAreaPrice']);

        TestBed.configureTestingModule({
            providers: [
                GrupoZapService,
                { provide: InputService, useValue: spyInputService },
                { provide: ValidationService, useValue: spyValidationService },
            ],
        });
        service = TestBed.get(GrupoZapService);
        valueInputServiceSpy = TestBed.get(InputService);
        valueValidationServiceSpy = TestBed.get(ValidationService);
    });

    it('should be created', () => {
        expect(service)
            .toBeDefined();
    });
});
