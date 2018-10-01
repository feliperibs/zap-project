import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { InputService } from './input.service';
import { ValidationService } from './validation.service';
import { HouseInput } from '../model/house-input';
import { Location } from '../model/location';

@Injectable()
export class VivaRealService {
    private location: Location;
    private price: number;

    constructor(
        private input: InputService,
        private validate: ValidationService,
    ) { }

    public getVivaRealHouses(): Observable<Array<HouseInput>> {
        return this.input.getHouses()
            .map((houses) => {
                return houses.filter((house) => {
                    return this.isVivaReal(house) === true;
                });
            });
    }

    private isVivaReal(house: HouseInput): boolean {
        this.location = house.address.geoLocation.location;
        this.price = Number(house.pricingInfos.price);

        if (this.validate.locationValidate(this.location) && Number(house.pricingInfos.monthlyCondoFee) < this.price * 1.3) {
            return this.realPricingRules(house);
        }

        return false;
    }

    private realPricingRules(house: HouseInput): boolean {
        if (house.pricingInfos.businessType === 'RENTAL') {
            const finalPrice = this.validate.isInBoundingBox(this.location) ? this.price * 1.5 : this.price;

            if (finalPrice >= 4000) return true;

            return false;
        } else {
            if (house.pricingInfos.businessType === 'SALE' && this.price >= 700000) return true;
        }

        return false;
    }

}
