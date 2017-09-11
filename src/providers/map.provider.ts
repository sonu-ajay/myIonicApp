import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';
import { AlertProvider } from './alert.provider';

@Injectable()
export class MapsProvider {

    constructor(private iab: InAppBrowser,
        private geolocation: Geolocation,
        private loading: LoadingController,
        private alert: AlertProvider) { }
        
    getLoader() {
        return this.loading.create({
            content: 'Loading Please Wait...',
        });
    }

    loadMap(searchstring: string) {
        var loader = this.getLoader();
        loader.present().then(() => {
            this.geolocation.getCurrentPosition().then((resp) => {
                const browser = this.iab.create('https://www.google.co.in/maps/search/' + searchstring + '/@' + resp.coords.latitude + ',' + resp.coords.longitude + '', '_self', 'location=no');
                browser.show();
            }).catch((error) => {
                this.alert.showAlert("Location Services !", "Your location services are disabled...");
            });
            loader.dismiss();
        });
    }
}
