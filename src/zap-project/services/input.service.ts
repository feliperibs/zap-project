import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { urlConfig } from '../../assets/url.config';
import { HouseInput } from '../model/house-input';

@Injectable()
export class InputService {
    constructor(
        private http: HttpClient,
    ) { }

    /**
     * Método que solicita a lista de casas que serão anunciadas
     */
    public getHouses(): Observable<Array<HouseInput>> {
        return this.http.get<Array<HouseInput>>(urlConfig.inputSrc);
    }

}
