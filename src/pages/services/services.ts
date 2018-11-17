import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as products from '../../carservices.json';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
    this.serviceList = products.services;
    console.log(this.serviceList);
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
  }

}
