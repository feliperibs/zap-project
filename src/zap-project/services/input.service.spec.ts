import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { urlConfig } from '../url.config';
import { HouseInput } from '../model/house-input';
import { InputService } from './input.service';

describe('InputService', () => {
    let service: InputService;
    let valueHttpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        const spyHttpClient = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            providers: [
                InputService,
                { provide: HttpClient, useValue: spyHttpClient },
            ],
        });
        service = TestBed.get(InputService);
        valueHttpClientSpy = TestBed.get(HttpClient);
    });

    it('should be created', () => {
        expect(service)
            .toBeDefined();
    });
});
