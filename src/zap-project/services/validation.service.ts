import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { InputService } from './input.service';
import { HouseInput } from '../model/house-input';
import { Location } from '../model/location';
import { boundingBox } from '../model/bounding-box';

@Injectable()
export class ValidationService {

    constructor(
        private input: InputService,
    ) { }

    public locationValidate(location: Location): boolean {
        if (location.lon === 0 && location.lat === 0) {
            return false;
        }

        return true;
    }

    public getUsableAreaPrice(usableArea: number, price: number): number {
        return price / usableArea;
    }

    public isInBoundingBox(location: Location): boolean {
        if (location.lat > boundingBox.minlat && location.lat < boundingBox.maxlat) {
            if (location.lon > boundingBox.minlon && location.lon < boundingBox.maxlon) {
                return true;
            }
        }

        return false;
    }

}
