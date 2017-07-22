import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
import { InAppBrowser } from 'ionic-native';

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

  login(email, password){
 
    this.showLoader();
 
    let details: UserDetails = {
        'email': email,
        'password': password
    };
 
    this.auth.login('custom').then(() => {
 
        this.loading.dismiss();
        // let browser=new InAppBrowser("https://www.google.co.in/");
        // browser.show();
 
        // success
        console.log(this.user);
 
    }, (err) => {
 
        this.loading.dismiss();
 
        // problem logging in
        console.log(err);
 
    });
 
  }

}