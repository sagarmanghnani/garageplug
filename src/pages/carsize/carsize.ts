import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as products from '../../cartypes.json';
/**
 * Generated class for the CarsizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carsize',
  templateUrl: 'carsize.html',
})
export class CarsizePage {

  carSizeList: Array<Object> = [];
  activeCarSize:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarsizePage');
    this.carSizeList = products.carsize;
    console.log(this.carSizeList);
  }

  getCarSize(item)
  {
    if(item.hasOwnProperty('active'))
    {
      if(!item.active)
      {
        item.active = true;
      }
      if(this.activeCarSize)
      {
        if(this.activeCarSize.id != item.id)
        {
          this.activeCarSize.active = false;
          this.activeCarSize = item;
        }
      }
      else
      {
        this.activeCarSize = item;
      }
    }

    else
    {
      if(this.activeCarSize)
      {
        if(this.activeCarSize.id != item.id)
        {
          this.activeCarSize['active'] = false;
        }
      }
      this.activeCarSize = item;
      this.activeCarSize['active'] = true;
    }

    console.log(this.carSizeList);
    console.log(this.activeCarSize);
  }
}
