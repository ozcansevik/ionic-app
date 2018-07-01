import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Hiking } from '../../model/hiking'
import { Step } from '../../model/step';
import { HikingService } from '../../services/hiking-service';
import { TimerService } from '../../services/timer-service';

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

  // boolean to show spinner while data are loading
  loaded: boolean = false;
  
  _timerService: TimerService;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private hikingService: HikingService, private timerService: TimerService) {

    this.hikingService.getHikings().subscribe((hikings) => {
      this.hikings = hikings;
      if (this.hikings && this.hikings.length > 0) {
        this.loaded = true;
      }
    })

    this._timerService = timerService;
  }

  selectHiking(h) {
    this.hikingService.selectHiking(h);
    this.navCtrl.push('DetailBefore', { 'hiking': h });
  }

  goToAddPage(){
    this.navCtrl.push('AddHiking');
  }
}
