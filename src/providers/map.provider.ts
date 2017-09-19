import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser,InAppBrowserOptions,InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { LoadingController } from 'ionic-angular';
import { AlertProvider } from './alert.provider';

@Injectable()
export class MapsProvider {

    options : InAppBrowserOptions = {
        location : 'no',//Or 'yes' 
        hidden : 'no', //Or  'yes'
        clearcache : 'yes',
        clearsessioncache : 'yes',
        zoom : 'yes',//Android only ,shows browser zoom controls 
        hardwareback : 'yes',
        mediaPlaybackRequiresUserAction : 'no',
        shouldPauseOnSuspend : 'no', //Android only 
        closebuttoncaption : 'Close', //iOS only
        disallowoverscroll : 'no', //iOS only 
        toolbar : 'yes', //iOS only 
        enableViewportScale : 'no', //iOS only 
        allowInlineMediaPlayback : 'no',//iOS only 
        presentationstyle : 'pagesheet',//iOS only 
        fullscreen : 'yes',//Windows only    
    };

    constructor(private iab: InAppBrowser,
        private geolocation: Geolocation,
        private loading: LoadingController,
        private alert: AlertProvider) { }
        
    getLoader() {
        return this.loading.create({
            content: 'Loading Maps...',
        });
    }

    loadMap(searchstring: string) {
        var loader = this.getLoader();
        loader.present();
        this.geolocation.getCurrentPosition().then((resp) => {
            const browser = this.iab.create('https://www.google.co.in/maps/search/' + searchstring + '/@' + resp.coords.latitude + ',' + resp.coords.longitude + '', '_blank', this.options);
            const watch = browser.on('loadstart').subscribe(type => {
                if(type.type=="loadstop")
                {
                    loader.dismiss();
                }
              });
            browser.show();
        }).catch((error) => {
            loader.dismiss();
            this.alert.showAlert("Location Services !", "Your location services are disabled...");
        });
        loader.dismiss();
    }
}
