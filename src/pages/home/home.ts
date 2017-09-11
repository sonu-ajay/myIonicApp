import { Component, ViewChild } from '@angular/core';
import {
  NavController,
  NavParams,
  ModalController,
  ActionSheetController
} from 'ionic-angular';
import { Employee } from '../../models/employee';
import { Action } from '../../models/action';
import { SampleEmployees } from '../../models/sampleemployees';
import { SampleActions } from '../../models/sampleactions';
import { EmployeePage } from '../employee/employee';
import { Slides } from 'ionic-angular';

import { SickEmployeeService } from '../../_services/sickemployee.service';

import { MapsProvider } from '../../providers/map.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  absentemployees: Employee[];
  actions: Action[];
  currentSlideIndex: number;
  currentEmployee: Employee;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,public actionSheetCtrl: ActionSheetController,navParams: NavParams, 
    public sickemployees: SickEmployeeService,public maps:MapsProvider) {
    this.currentSlideIndex = 0;
    this.initializeEmployees();
    var emp = navParams.get('item');
    console.log(emp);

    if (emp) {
      this.currentSlideIndex = emp.employeeId - 1;
      //this.currentEmployee=emp;      
    }
    this.initializeSlide();
  }

  initializeEmployees() {
    let emps = new SampleEmployees();
    this.absentemployees = emps.employees;
  }

  initializeSlide() {
    this.currentEmployee = this.absentemployees[this.currentSlideIndex];
    let act = new SampleActions(this.currentEmployee.name);
    this.actions = act.actions;
  }

  getActions() {
    this.currentSlideIndex = this.slides.getActiveIndex();

    this.currentEmployee = this.absentemployees[this.currentSlideIndex];
    let act = new SampleActions(this.currentEmployee.name);

    this.actions = act.actions;
  }

  removeAction(action) {
    let index: number = this.actions.indexOf(action);
    if (index !== -1) {
      this.actions.splice(index, 1);
    }
  }

  markActionDone(emp) {
    let index: number = this.absentemployees.indexOf(emp);
    if (index !== -1) {
      this.absentemployees.splice(index, 1);
    }
  }

  openEmployee(employee: Employee) {
    console.log(employee);
    let modal = this.modalCtrl.create(EmployeePage, { emp: employee });
    modal.present();
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

  presentActionSheet(action: Action) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Perform Actions',
      buttons: [
        {
          text: 'Send Flowers',
          role: 'SendFlowers',
          handler: () => {
            this.maps.loadMap("Flowers");
          }
        }, {
          text: 'Book Appointment',
          role: 'BookAppt',
          handler: () => {
            this.maps.loadMap("Hospitals");
          }
        }, {
          text: 'Remove Action',
          role: 'Remove',
          handler: () => {
            this.removeAction(action)
          }
        }, {
          text: 'Mark Illness Complete',
          handler: () => {
            var emp = this.absentemployees.find(x => x.employeeId == action.employeeId);
            this.markActionDone(emp);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
