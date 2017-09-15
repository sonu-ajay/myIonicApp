import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { RewardsPage } from '../pages/rewards/rewards';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { SickEmployeeService } from '../pages/home//sickemployee.service';

import { MapsProvider } from '../providers/map.provider';
import { AlertProvider } from '../providers/alert.provider';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    HomePage,
    TabsPage,
    AboutPage,
    RewardsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    HomePage,
    TabsPage,
    AboutPage,
    RewardsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,    
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SickEmployeeService,
    AlertProvider,
    MapsProvider
  ]
})
export class AppModule { }
