import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { VivaRealService } from './viva-real.service';
import { InputService } from './input.service';
import { ValidationService } from './validation.service';
import { HouseInput } from '../model/house-input';
import { Location } from '../model/location';

describe('VivaRealService', () => {
    let service: VivaRealService;
    let valueInputServiceSpy: jasmine.SpyObj<InputService>;
    let valueValidationServiceSpy: jasmine.SpyObj<ValidationService>;

    beforeEach(() => {
        const spyInputService = jasmine.createSpyObj('InputService', ['getHouses']);
        const spyValidationService = jasmine.createSpyObj('InputService', ['locationValidate', 'getUsableAreaPrice']);

        TestBed.configureTestingModule({
            providers: [
                VivaRealService,
                { provide: InputService, useValue: spyInputService },
                { provide: ValidationService, useValue: spyValidationService },
            ],
        });
        service = TestBed.get(VivaRealService);
        valueInputServiceSpy = TestBed.get(InputService);
        valueValidationServiceSpy = TestBed.get(ValidationService);
    });

    it('should be created', () => {
        expect(service)
            .toBeDefined();
    });
});
