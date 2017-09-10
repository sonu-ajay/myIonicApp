import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SickEmployeesPage } from '../pages/sickemployees/sickemployees';
import { EmployeePage } from '../pages/employee/employee';
import { ActionsPage } from '../pages/actions/actions';
import { MapsComponent } from '../pages/map/map.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { SickEmployeeService } from '../_services/sickemployee.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SickEmployeesPage,
    EmployeePage,
    ActionsPage,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SickEmployeesPage,
    EmployeePage,
    ActionsPage,
    MapsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SickEmployeeService
  ]
})
export class AppModule { }
