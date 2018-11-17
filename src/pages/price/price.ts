import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
  servicesPrice: Array<Object> = [];
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
        console.log(this.carSize);
      })
    });
  }

  totalAmount()
  {
    // I need to test the reduce function also
    for(let item of this.activeServices)
    {
      this.servicesPrice.push(item.value);
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


}
