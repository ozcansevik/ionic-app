import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import {Hiking} from '../../model/hiking'
import { HikingService } from '../../services/hiking-service';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the DetailBefore page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: "DetailBefore"
})
@Component({
  selector: 'page-detail-before',
  templateUrl: 'detail-before.html',
})
export class DetailBefore {

  hiking: Hiking

  current_longitude: number;
  current_latitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private hikingService: HikingService) {

     /* get hiking by param in case of nav or get hiking from storage in case of page refresh */
    if(this.navParams.get('hiking') != null){
      this.hiking = this.navParams.get('hiking');
    } else {
      this.hikingService.getSelectedHiking().subscribe( (hiking)=> {
        this.hiking = hiking;
      });
    }
  }


  start(h){
    this.navCtrl.push('DetailDuring',{ 'hiking' : h });
  }

  navPop() {
    if (this.navCtrl.getPrevious() != null) {
      this.navCtrl.pop();
    }
  }

}
