import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RewardsPage } from '../rewards/rewards';
import { HomePage } from '../home/home';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RewardsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
