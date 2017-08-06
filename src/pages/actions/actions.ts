import { Component } from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { Employee } from '../../models/employee'

@Component({
  selector: 'page-actions',
  templateUrl: 'actions.html'
})
export class ActionsPage {
   emp:Employee;
   constructor(public navCtrl: NavController, navParams: NavParams,public alertCtrl:AlertController) {
    this.emp = navParams.get('item') || {icon:"",name:"",personalcode:"",startdate:""};
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Action Clicked!',
      subTitle: "Sorry I didn't implement this!",
      buttons: ['OK']
    });
    alert.present();
  }
}