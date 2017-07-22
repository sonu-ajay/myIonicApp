import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbsentEmployee } from '../../models/absentemployee';
import { EmployeePage } from '../employee/employee'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  absentemployees:AbsentEmployee[]=[
    {icon:"../../assets/icon/cheetah.jpg", name:"Ajay Kumar Singh", personalcode:"123", startdate:"22-July-2017"},
    {icon:"../../assets/icon/cheetah.jpg", name:"Juned Jahangirdar", personalcode:"456", startdate:"22-July-2017"},
    {icon:"../../assets/icon/cheetah.jpg", name:"Mayank Shekhar", personalcode:"678", startdate:"22-July-2017"},
    {icon:"../../assets/icon/cheetah.jpg", name:"Rohit Tiwari", personalcode:"911", startdate:"22-July-2017"},
    {icon:"../../assets/icon/cheetah.jpg", name:"Satish Vekatakrishnan", personalcode:"1213", startdate:"22-July-2017"},
    {icon:"../../assets/icon/cheetah.jpg", name:"Likhit Raj", personalcode:"1415", startdate:"22-July-2017"},
    {icon:"../../assets/icon/cheetah.jpg", name:"Sai Kumar Chilamkoti", personalcode:"1617", startdate:"22-July-2017"},
    {icon:"../../assets/icon/cheetah.jpg", name:"Jacob Kochekkan", personalcode:"1819", startdate:"22-July-2017"}
  ];
  constructor(public navCtrl: NavController) {
    
  }
  openEmployee(item: AbsentEmployee) {
    this.navCtrl.push(EmployeePage, {
      item: item
    });
  }
}
