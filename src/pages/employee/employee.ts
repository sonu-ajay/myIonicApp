import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Employee } from '../../models/employee';
import { ActionsPage } from '../actions/actions'

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html'
})
export class EmployeePage {
   emp:Employee;
   constructor(public navCtrl: NavController, navParams: NavParams) {
    this.emp = navParams.get('item') || {icon:"",name:"",personalcode:"",startdate:""};
  }
  getActions(item: Employee) {
    this.navCtrl.push(ActionsPage, {
      item: item
    });
  }
}
