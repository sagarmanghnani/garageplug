import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as products from '../../carservices.json';
import { Storage } from '@ionic/storage';
import {CarsizePage} from '../carsize/carsize';
/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  serviceList: Array<Object> = [];
  activeServices: Array<Object> = [];
  alreadyActiveServices: Array<Object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
    this.serviceList = products.services;
    console.log(this.serviceList);
    this.activeServices = [];
    //new code here
    if(this.navParams.get('services'))
    {
      this.alreadyActiveServices = this.navParams.get('services');
      console.log(this.alreadyActiveServices);
      // for(let active in this.alreadyActiveServices)
      // {
      //   for(let items in this.serviceList)
      //   {
      //     active['id'] == items['id'];
      //     items['active'] = true;
      //   }
      // }

    }
    //ends here
  }


  getServices(item){
    //setting the active property if it is present
    if(item.hasOwnProperty('active'))
    {
      let status = !item.active
      item.active = status
    }
    //setting the active property if it already not present in the object
    else
    {
      item["active"] = true;
    }
    console.log(item);
  }

  submitServices()
  {
    //separating out the active objects and sending the array of these objects
    for(let items of this.serviceList)
    {
      if(items.hasOwnProperty('active'))
      {
        if(items['active'])
        {
          this.activeServices.push(items);
        }
      }
    }

    console.log(this.activeServices);
    //storing the activeservice array in storage
    this.storage.set('activeServices', this.activeServices);
    this.navCtrl.push(CarsizePage, {
      'activeServices': this.activeServices
    })

  }

}
