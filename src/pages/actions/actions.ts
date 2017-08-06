import { Component } from '@angular/core';
import { NavController,NavParams,
  ActionSheetController,AlertController,ModalController } from 'ionic-angular';
import { Employee } from '../../models/employee';
import { EmployeePage } from '../employee/employee';

@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html'
})
export class ActionsPage {
   emp:Employee;
   constructor(public navCtrl: NavController, navParams: NavParams, public modalCtrl: ModalController,
   public actionSheetCtrl:ActionSheetController,public alertCtrl:AlertController) {
    this.emp = navParams.get('item') || {icon:"",name:"",personalcode:"",startdate:""};
  }
  openEmployee(employee: Employee) {
    console.log(employee);
    let modal = this.modalCtrl.create(EmployeePage, { emp: employee });
    modal.present();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Perform Actions',
      buttons: [
        {
          text: 'Remove It',
          role: 'Remove',
          handler: () => {
            this.showAlert("Remove It :");
          }
        }, {
          text: 'Mark Complete',
          handler: () => {
            this.showAlert("Mark Complete :");
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