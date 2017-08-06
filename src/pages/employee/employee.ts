import { Component } from '@angular/core';
import { NavController,NavParams,ViewController } from 'ionic-angular';
import { Employee } from '../../models/employee';
import { ActionsPage } from '../actions/actions';

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html'
})
export class EmployeePage {
   emp:Employee;
   constructor(public navCtrl: NavController, navParams: NavParams,public viewCtrl:ViewController) {
     this.emp = navParams.get('emp') || {icon:"",name:"",personalcode:"",startdate:""};
  }
  getActions(item: Employee) {
    this.navCtrl.push(ActionsPage, {
      item: item
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
