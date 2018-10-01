import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapProjectComponent } from './zap-project.component';

describe('ZapProjectComponent', () => {
    let fixture: ComponentFixture<ZapProjectComponent>;
    let component: ZapProjectComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ZapProjectComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
        });
        fixture = TestBed.createComponent(ZapProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component)
            .toBeTruthy();
    });
});
