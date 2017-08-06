import { Component } from '@angular/core';
import { NavController, ModalController, ActionSheetController,AlertController } from 'ionic-angular';
import { Employee } from '../../models/employee';
import { ActionsPage } from '../actions/actions';
import { EmployeePage } from '../employee/employee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  absentemployees: Employee[];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,public alertCtrl:AlertController) {
    this.initializeEmployees();
  }

  initializeEmployees() {
    this.absentemployees = [
      { icon: "assets/ajay.jpg", name: "Ajay Kumar Singh", personalcode: "123", startdate: "22-July-2017" },
      { icon: "assets/icon/cheetah.jpg", name: "Juned Jahangirdar", personalcode: "456", startdate: "22-July-2017" },
      { icon: "assets/mayank.jpg", name: "Mayank Shekhar", personalcode: "678", startdate: "22-July-2017" },
      { icon: "assets/rohit.jpg", name: "Rohit Tiwari", personalcode: "911", startdate: "22-July-2017" },
      { icon: "assets/satish.jpg", name: "Satish Vekatakrishnan", personalcode: "1213", startdate: "22-July-2017" },
      { icon: "assets/likhit.jpg", name: "Likhit Raj", personalcode: "1415", startdate: "22-July-2017" },
      { icon: "assets/sai.jpg", name: "Sai Kumar Chilamkoti", personalcode: "1617", startdate: "22-July-2017" },
      { icon: "assets/jacob.jpg", name: "Jacob Kochekkan", personalcode: "1819", startdate: "22-July-2017" }
    ];
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
