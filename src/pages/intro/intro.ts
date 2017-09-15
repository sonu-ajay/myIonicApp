import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'intro.html',
  styleUrls:['/pages/intro/intro.scss']
})
export class IntroPage {
  constructor(private nav: NavController) {

  }

  gotoHome() {
    this.nav.push(TabsPage);
  }

  slides = [
    {
      title: "Welcome to the App!",
      description: "This app will help you reduce absensism by <b>Suggesting you effective actions using Artificial Intelligence</b>.",
      image: "/assets/home.png",
    },
    {
      title: "Absent Employees?",
      description: "This section on the screen will show you the employee absent. You either click <b>next/prev</b> or slide <b>back/forward</b> to get the next/previous absent employee.",
      image: "/assets/empslide.png",
    },
    {
      title: "Actions?",
      description: "Slide <b>Back/Forward</b> to get options to perform the actions or <b>Touch the arrow icon</b>.",
      image: "/assets/actions.png",
    },
    {
      title: "A flying Plus Button?",
      description: "The flying plus button will help you add your own custom actions.",
      image: "/assets/plusbtn.png",
    }
  ];
}