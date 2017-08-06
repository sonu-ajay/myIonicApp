import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Employee } from '../../models/employee';
//import { EmployeePage } from '../employee/employee';
import { ActionsPage } from '../actions/actions';

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
    this.absentemployees=[
    {icon:"assets/ajay.jpg", name:"Ajay Kumar Singh", personalcode:"123", startdate:"22-July-2017"},
    {icon:"assets/icon/cheetah.jpg", name:"Juned Jahangirdar", personalcode:"456", startdate:"22-July-2017"},
    {icon:"assets/mayank.jpg", name:"Mayank Shekhar", personalcode:"678", startdate:"22-July-2017"},
    {icon:"assets/rohit.jpg", name:"Rohit Tiwari", personalcode:"911", startdate:"22-July-2017"},
    {icon:"assets/satish.jpg", name:"Satish Vekatakrishnan", personalcode:"1213", startdate:"22-July-2017"},
    {icon:"assets/likhit.jpg", name:"Likhit Raj", personalcode:"1415", startdate:"22-July-2017"},
    {icon:"assets/sai.jpg", name:"Sai Kumar Chilamkoti", personalcode:"1617", startdate:"22-July-2017"},
    {icon:"assets/jacob.jpg", name:"Jacob Kochekkan", personalcode:"1819", startdate:"22-July-2017"}
  ];
  }
  openEmployee(item: Employee) {
    this.navCtrl.push(ActionsPage, {
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
