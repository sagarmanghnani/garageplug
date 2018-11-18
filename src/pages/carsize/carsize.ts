import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  products from '../../cartypes.js';
import { Storage } from '@ionic/storage';
import {PricePage} from '../price/price';
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
  changes:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarsizePage');
    this.carSizeList = products.carsize;
    console.log(this.carSizeList);
    //new code here
    
    if(this.navParams.get('carSize'))
    {
      this.activeCarSize = this.navParams.get('carSize');
      this.changes = true;
    }
    //ends here
  }

  getCarSize(item)
  {
    //if object has property active then
    if(item.hasOwnProperty('active'))
    {
     //starts here

     if(this.activeCarSize)
     {
       //if activeCarSize is present then
       if(this.activeCarSize.id != item.id)
       {
         //if activeCarSize does not matched with selected object make older activecarsize to false and assign new carsize
         this.activeCarSize.active = false;
         //new code here

         if(this.changes)
         {
           for(let items of this.carSizeList)
           {
             if(this.activeCarSize.id == items['id'])
             {
               items['active'] = false;
             }
             
           }
         }

         //ends here
         this.activeCarSize = item;
       }
     //changes ends here
      //if object active property is false then
      if(!item.active)
      {
        //make item active property true
        item.active = true;
      }
     
      }
      else
      {
        this.activeCarSize = item;
      }
    }

    else
    {
      //if object does not have active property
      if(this.activeCarSize)
      {
        //if carsize already selected then
        if(this.activeCarSize.id != item.id)
        {
          //check if car size is same as selected car size, if not then set older car size to false and set selected car size to true
          this.activeCarSize['active'] = false;
          //new code here
          //if changes are made in the carsize then
          if(this.changes)
          {
            //check for object matching the activecarsize and make it to false as other carsize is selected
            for(let items of this.carSizeList)
            {
              if(this.activeCarSize.id == items['id'])
              {
                items['active'] = false;
              }
              
            }
          }
          //ends here
          console.log(this.activeCarSize);
        }
      }
      this.activeCarSize = item;
      this.activeCarSize['active'] = true;
    }

    console.log(this.carSizeList);
    console.log(this.activeCarSize);
  }

  submitCarSize()
  {
    console.log(this.activeCarSize);
    this.storage.set('carSize', this.activeCarSize);
    this.navCtrl.push(PricePage, {
      'carSize':this.activeCarSize
    });
  }
}
