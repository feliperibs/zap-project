import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { InputService } from './input.service';
import { ValidationService } from './validation.service';
import { HouseInput } from '../model/house-input';
import { Location } from '../model/location';

@Injectable()
export class GrupoZapService {
    private location: Location;
    private price: number;
    private finalHouses: Array<HouseInput>;

    constructor(
        private input: InputService,
        private validate: ValidationService,
    ) { }

    public getGrupoZapHouses(): Observable<Array<HouseInput>> {
        return this.input.getHouses()
            .map((houses) => {
                return houses.filter((house) => {
                    return this.isGrupoZap(house) === true;
                });
            });
    }

    private isGrupoZap(house: HouseInput): boolean {
        this.location = house.address.geoLocation.location;
        this.price = Number(house.pricingInfos.price);

        if (this.validate.locationValidate(this.location) && this.validate.getUsableAreaPrice(house.usableAreas, this.price) >= 3500) {
            return this.zapPricingRules(house);
        }

        return false;
    }

    private zapPricingRules(house: HouseInput): boolean {
        if (house.pricingInfos.businessType === 'SALE') {
            const finalPrice = this.validate.isInBoundingBox(this.location) ? this.price * 0.9 : this.price;

            if (finalPrice >= 600000) return true;

            return false;
        } else {
            if (house.pricingInfos.businessType === 'RENT' && this.price >= 3500) return true;
        }

        return false;
    }
}
