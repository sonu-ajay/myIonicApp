import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertProvider {

    constructor(private alertCtrl: AlertController) { }

    showAlert(title, msg) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }
}
