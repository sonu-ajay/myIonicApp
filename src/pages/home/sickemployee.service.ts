import { Injectable } from '@angular/core';
import { CacheService } from "ionic-cache";
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from '../../models/employee';

@Injectable()
export class SickEmployeeService {

    APIGetURL = "http://smartaction.azurewebsites.net";
    constructor(private http: Http, private cache: CacheService) {
    }

    loadSickEmployees() {
        let cacheKey=this.APIGetURL;
        var request = this.http.get(this.APIGetURL).map(res => res.json());
        return this.cache.loadFromObservable(cacheKey, request);
    }

    loadSuggesstedActions(emp: Employee) {
        let cacheKey=this.APIGetURL+"/?IllnessTypeId="+emp.IllnessTypeId+"&IllnessNatureId="+emp.IllnessNatureId+".0&Age="+emp.Age+"";
        var request = this.http.post(cacheKey, {})
        .map(res => res.json());
        return this.cache.loadFromObservable(cacheKey, request);        
    }
}