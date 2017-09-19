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
      title: "Welcome to Smart Actions!",
      description: "This app will help you reduce absenteeism by <b>Suggesting you effective actions using Artificial Intelligence</b>.",
      image: "https://i.imgur.com/bgCx4V6.png",
    },
    {
      title: "Absent Employees?",
      description: "This section on the screen will show you the employee absent. You either slide <b>back/forward</b> or click <b>backward/forward arrows</b> to get the next/previous absent employee.",
      image: "https://i.imgur.com/iqgJZOw.png",
    },
    {
      title: "Actions?",
      description: "<b>Swipe left or right</b> on the action to get additional options, or click on the <b>arrow icon</b>.",
      image: "https://i.imgur.com/at8Orz3.png",
    },
    {
      title: "A flying Plus Button?",
      description: "The flying plus button will help you add your own custom actions.",
      image: "https://i.imgur.com/K1L7UxU.png",
    }
  ];
}