import { Component, ViewChild } from '@angular/core';
import {
  NavController,
  ModalController,
  ActionSheetController
} from 'ionic-angular';
import { Employee } from '../../models/employee';
import { Slides } from 'ionic-angular';

import { SickEmployeeService } from './sickemployee.service';

import { MapsProvider } from '../../providers/map.provider';
import { AlertProvider } from '../../providers/alert.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  absentemployees: Employee[];
  actions: string[];
  currentSlideIndex: number;
  currentEmployee: Employee;
  nextbtn = true;
  prevbtn = true;
  constructor(private navCtrl: NavController, private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController,
    private sickemployeeService: SickEmployeeService, private maps: MapsProvider, private alerts: AlertProvider) {
    this.currentSlideIndex = 0;
    this.initializeEmployees();
  }

  ngAfterViewInit() {
    this.slides.centeredSlides = true;
  }

  initializeEmployees() {
    this.sickemployeeService.loadSickEmployees().subscribe(data => {
      this.absentemployees = data['Employee'];
      this.currentEmployee = this.absentemployees[this.currentSlideIndex];
      this.getActions(this.currentEmployee);
      this.checkForSlideButtons();
    },
      err => {
        console.log("Error" + err);
      },
      () => console.log("Employee Search Complete")
    );
  }

  getActions(emp: Employee) {
    this.sickemployeeService.loadSuggesstedActions(emp).subscribe(data => {
      this.actions = data['Actions'];
      console.log(this.actions);
    },
      err => {
        console.log("Error" + err);
      },
      () => console.log("Action Search Complete")
    );
  }

  ionSlideDidChange() {
    this.currentSlideIndex = this.slides.getActiveIndex();
    this.currentEmployee = this.absentemployees[this.currentSlideIndex];
    this.getActions(this.currentEmployee);
    this.checkForSlideButtons();
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

  SlidePrev() {
    this.slides.slidePrev();
    this.checkForSlideButtons();
  }

  SlideNext() {
    this.slides.slideNext();
    this.checkForSlideButtons();
  }
  checkForSlideButtons() {
    if (this.currentSlideIndex == this.absentemployees.length - 1) {
      this.nextbtn = false;
    }
    else {
      this.nextbtn = true;
    }
    if (this.currentSlideIndex == 0) {
      this.prevbtn = false;
    }
    else{
      this.prevbtn = true;
    }
  }

  presentActionSheet(action: string) {
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
            // var emp = this.absentemployees.find(x => x.employeeId == action.employeeId);
            // this.markActionDone(emp);
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
