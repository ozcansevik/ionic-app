import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { Hiking } from '../../model/hiking'
import { Step } from '../../model/step';
import { HikingService } from '../../services/hiking-service';

/**
 * Generated class for the Master page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'Master'
})
@Component({
  selector: 'page-master',
  templateUrl: 'master.html',
})
export class Master {

  hikings: Array<Hiking>

  loaded: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private hikingService: HikingService) {

    this.hikingService.getHikings().subscribe((hikings) => {
      this.hikings = hikings;
      if (this.hikings.length > 0) {
        this.loaded = true;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Master');
  }

  selectHiking(h) {
    this.hikingService.selectHiking(h);
    this.navCtrl.push('DetailBefore', { 'hiking': h });
  }

  goToAddPage(){
    this.navCtrl.push('AddHiking');
  }
}
