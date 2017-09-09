import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SickEmployeeService } from '../../_services/sickemployee.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  posts:any;
  constructor(public navCtrl: NavController, public sickemployees: SickEmployeeService) {
    this.loadSickEmployees();
  }

  loadSickEmployees() {
    this.sickemployees.load()
      .then(data => {
        this.posts=data
      });
  }

}
