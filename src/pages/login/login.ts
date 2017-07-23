import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
import { InAppBrowser } from 'ionic-native';
// declare var WindowsAzure: any;
// var client = new WindowsAzure.MobileServiceClient("http://ajaysmobileapp.azurewebsites.net");

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    loading: any;
    

  constructor(public navCtrl: NavController, public auth: Auth, public user: User, private loadingCtrl: LoadingController) {

  }

  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: "Authenticating..."
    });
 
    this.loading.present();
 
  }

  login(){
 
    this.showLoader();
    this.auth.login('custom').then(() => { 
        this.loading.dismiss(); 
        // success
        console.log(this.user);
 
    }, (err) => {
 
        this.loading.dismiss();
 
        // problem logging in
        console.log(err);
 
    });
 
  }

}