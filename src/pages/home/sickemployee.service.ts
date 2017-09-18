import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from '../../models/employee';

@Injectable()
export class SickEmployeeService {

    http: Http;
    APIGetURL = "http://smartaction.azurewebsites.net";
    constructor(http: Http) {
        this.http = http;
    }

    loadSickEmployees() {
        var response = this.http.get(this.APIGetURL).map(res => res.json());
        return response;
    }

    loadSuggesstedActions(emp: Employee) {
        var response = this.http.post(this.APIGetURL+"/?IllnessTypeId="+emp.IllnessTypeId+"&IllnessNatureId="+emp.IllnessNatureId+".0&Age="+emp.Age+"", {})
        .map(res => res.json());
        return response;
    }
}