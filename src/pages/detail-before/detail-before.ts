import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import {Hiking} from '../../model/hiking'
import { HikingService } from '../../services/hiking-service';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private hikingService: HikingService) {

    console.log(this.navParams)
    if(this.navParams.get('hiking')){
      this.hiking = this.navParams.get('hiking');
    } else {
      this.hiking = this.hikingService.getSelectedHiking();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBefore');
  }

  start(h){
    this.navCtrl.push('DetailDuring',{ 'hiking' : h });
  }

}
