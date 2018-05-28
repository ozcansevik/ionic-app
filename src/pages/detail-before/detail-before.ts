import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import {Hiking} from '../../model/hiking'
import { HikingService } from '../../services/hiking-service';
import { ActivatedRoute } from '@angular/router';

/**
 * Generated class for the DetailBefore page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: "DetailBefore",
  segment: 'detail/:id'
})
@Component({
  selector: 'page-detail-before',
  templateUrl: 'detail-before.html',
})
export class DetailBefore {

  hiking: Hiking

  constructor(public navCtrl: NavController, public navParams: NavParams, private hikingService: HikingService,
     private activatedRoute: ActivatedRoute) {

    console.log(this.navParams)
    if(this.navParams.get('hiking') != null){
      this.hiking = this.navParams.get('hiking');
    } else {
      this.hiking = this.hikingService.getSelectedHiking();
    }
  }

  ionViewDidLoad() {
      this.activatedRoute.params.subscribe(paramsId => {
          let id = paramsId.id;
          // call service to return hiking according to id;
      });
  }

  start(h){
    this.navCtrl.push('DetailDuring',{ 'hiking' : h });
  }

}
