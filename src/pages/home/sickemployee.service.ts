import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from '../../models/employee';

@Injectable()
export class SickEmployeeService {

    APIGetURL = "http://smartaction.azurewebsites.net";
    constructor(private http: Http) {
    }

    loadSickEmployees() {
        let URL=this.APIGetURL;
        var request = this.http.get(URL).map(res => res.json());
        return request
    }

    loadSuggesstedActions(emp: Employee) {
        let URL=this.APIGetURL+"/?IllnessTypeId="+emp.IllnessTypeId+"&IllnessNatureId="+emp.IllnessNatureId+".0&Age="+emp.Age+"";
        var request = this.http.post(URL, {})
        .map(res => res.json());
        return request;
    }
}