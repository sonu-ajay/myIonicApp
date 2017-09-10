import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
   
   @Component({
     selector: 'page-map',
     templateUrl: 'map.component.html'
   })
   export class MapsComponent {
     map: GoogleMap;
     mapElement: HTMLElement;
     constructor(public navCtrl: NavController, private googleMaps: GoogleMaps) {}
   
     loadMap() {
        this.map = new GoogleMap('map');
      
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
          console.log('Map is ready!');
        });
      }
   }