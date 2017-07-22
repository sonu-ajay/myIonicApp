import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AbsentEmployee } from '../../models/absentemployee'

@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html'
})
export class EmployeePage {
   illemployee:AbsentEmployee;
   constructor(public navCtrl: NavController, navParams: NavParams) {
    this.illemployee = navParams.get('item') || {icon:"",name:"",personalcode:"",startdate:""};
  }
}
