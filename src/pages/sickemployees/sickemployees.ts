import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Employee } from '../../models/employee';
import { SampleEmployees } from '../../models/sampleemployees';
//import { EmployeePage } from '../employee/employee';
import { ActionsPage } from '../actions/actions';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-sickemployees',
  templateUrl: 'sickemployees.html'
})
export class SickEmployeesPage {
  absentemployees:Employee[];
  constructor(public navCtrl: NavController) {
    this.initializeEmployees();
  }

  initializeEmployees(){
    let emps=new SampleEmployees();
    this.absentemployees=emps.employees;
  }
  openEmployee(item: Employee) {
    this.navCtrl.push(HomePage, {
      item: item
    });
  }

  getEmployees(ev) {
    // Reset items back to all of the items
    this.initializeEmployees();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.absentemployees = this.absentemployees.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
