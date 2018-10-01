import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { ValidationService } from './validation.service';
import { InputService } from './input.service';
import { HouseInput } from '../model/house-input';
import { Location } from '../model/location';
import { boundingBox } from '../model/bounding-box';

describe('ValidationService', () => {
    let service: ValidationService;
    let valueInputServiceSpy: jasmine.SpyObj<InputService>;

    beforeEach(() => {
        const spyInputService = jasmine.createSpyObj('InputService', ['get']);

        TestBed.configureTestingModule({
            providers: [
                ValidationService,
                { provide: InputService, useValue: spyInputService },
            ],
        });
        service = TestBed.get(ValidationService);
        valueInputServiceSpy = TestBed.get(InputService);
    });

    it('should be created', () => {
        expect(service)
            .toBeDefined();
    });
});
