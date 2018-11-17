import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ServicesPage} from '../services/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  moveToServicePage()
  {
    this.navCtrl.push(ServicesPage);
  }

}
