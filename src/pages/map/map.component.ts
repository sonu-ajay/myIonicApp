import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

   @Component({
     selector: 'page-map',
     templateUrl: 'map.component.html'
   })
   export class MapsComponent {
    
    constructor(private iab: InAppBrowser) {
        this.loadMap();
     }
    
   
     loadMap() {
        const browser = this.iab.create('https://ionicframework.com/');
        
        
        browser.show();
      }
   }