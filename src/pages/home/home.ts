import { Component, ViewChild } from '@angular/core';
import {
  NavController,
  ModalController,
  ActionSheetController,
  AlertController
} from 'ionic-angular';
import { Employee } from '../../models/employee';
import { Action } from '../../models/action';
import { SampleEmployees } from '../../models/sampleemployees';
import { SampleActions } from '../../models/sampleactions';
import { EmployeePage } from '../employee/employee';
import { Slides } from 'ionic-angular';
import { GoogleMaps } from '@ionic-native/google-maps';

import { SickEmployeeService } from '../../_services/sickemployee.service';
import { MapsComponent } from '../map/map.component';

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
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController,
    public sickemployees: SickEmployeeService,
    public maps: GoogleMaps) {
    this.currentSlideIndex = 0;
    this.initializeEmployees();
  }

  initializeEmployees() {
    let emps = new SampleEmployees();
    this.absentemployees = emps.employees;
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

  // callEmployee(emp:Employee){
  //   this.callNumber.callNumber(emp.contactnumber, true)
  //   .then()
  //   .catch(() => console.log('Error launching dialer'));
  // }

  openMaps() {
    
    let modal = this.modalCtrl.create(MapsComponent, { });
    modal.present();
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

  presentActionSheet(emp: Employee) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Perform Actions',
      buttons: [
        {
          text: 'Book Appointment',
          role: 'BookAppt',
          handler: () => {
            this.openMaps();
          }
        }, {
          text: 'Remove It',
          role: 'Remove',
          handler: () => {
            let index: number = this.absentemployees.indexOf(emp);
            if (index !== -1) {
              this.absentemployees.splice(index, 1);
            }
          }
        }, {
          text: 'Mark Complete',
          handler: () => {
            this.showAlert("Action for : " + emp.name);
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

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: msg + ' Clicked!',
      subTitle: "Sorry Its still not implemented!",
      buttons: ['OK']
    });
    alert.present();
  }

}
