import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from '../models/post';

import { APIConstants } from './API.constants';

@Injectable()
export class SickEmployeeService {

    data1: Post[];
    http: Http;
    constructor(http: Http) {
        this.http = http;
    }

    load() {
        if (this.data1) {
            return Promise.resolve(this.data1);
        }
        // Dont have the data yet
        return new Promise(resolve => {
            this.http.get(APIConstants.EmployeeGetUrl)
                .map(res => res.json())
                .subscribe(data => {
                    this.data1 = data;
                    resolve(this.data1);
                });
        });
    }
}