import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {ServicesPage } from '../services/services';
/**
 * Generated class for the PricePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-price',
  templateUrl: 'price.html',
})
export class PricePage {

  activeServices : Array<Object> = [];
  carSize: any;
  servicesPrice = [];
  amount:number = 0;
  carServicePrice = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PricePage');
    this.getDetails();
  }

  getDetails()
  {
    this.storage.get('activeServices').then((val) => {
      this.activeServices = val;
      this.storage.get('carSize').then((val) => {
        this.carSize = val;
        this.totalAmount();
        console.log(this.carSize);
        console.log(this.activeServices)
      })
    });
  }

  totalAmount()
  {
    // I need to test the reduce function also
    for(let item of this.activeServices)
    {
      this.servicesPrice.push(item['value']);
    }
    this.carServicePrice = this.servicesPrice.map(val => {
      return (this.carSize.value * val);
    });
    this.totalAmount = this.carServicePrice.reduce((acc, currValue) => {
      return acc + currValue;
    }, 0)

    console.log(this.carServicePrice);
    console.log(this.totalAmount);

  }

  changeServices()
  {
    this.navCtrl.push(ServicesPage, {
      'services':this.activeServices,
      'carSize': this.carSize
    })
  }


}
