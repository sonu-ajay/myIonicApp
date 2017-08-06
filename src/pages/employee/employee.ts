import { Component } from '@angular/core';
import { NavParams,ViewController } from 'ionic-angular';
import { Employee } from '../../models/employee';

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html'
})
export class EmployeePage {
   emp:Employee;
   constructor(navParams: NavParams,public viewCtrl:ViewController) {
     this.emp = navParams.get('emp') || {icon:"",name:"",personalcode:"",startdate:""};
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
