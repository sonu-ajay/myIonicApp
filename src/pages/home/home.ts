import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController,AlertController } from 'ionic-angular';
import { Employee } from '../../models/employee';
import { Action } from '../../models/action';
import { SampleEmployees } from '../../models/sampleemployees';
import { SampleActions } from '../../models/sampleactions';
import { EmployeePage } from '../employee/employee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  absentemployees: Employee[];
  actions:Action[];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,public alertCtrl:AlertController) {
    this.initializeEmployees();
    this.getActions();
  }

  initializeEmployees() {
    let emps=new SampleEmployees();
    this.absentemployees=emps.employees;
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

  getActions(){
    let act=new SampleActions();
    this.actions=act.actions;
  }

  presentActionSheet(emp: Employee) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Perform Actions',
      buttons: [
        {
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
            this.showAlert("Action for : "+emp.name);
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
      title: msg+' Clicked!',
      subTitle: "Sorry Its still not implemented!",
      buttons: ['OK']
    });
    alert.present();
  }

}
