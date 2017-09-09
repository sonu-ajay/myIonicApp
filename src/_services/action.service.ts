import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { APIConstants } from './API.constants';

@Injectable()
export class SickEmployeeService {

    data: any;
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    retrieveData() {
        this.http.get(APIConstants.EmployeeGetUrl)
            .subscribe(data => {
                this.data = data;
            });
    }

    getData() {
        return this.data;
    }
}