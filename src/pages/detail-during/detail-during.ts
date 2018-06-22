import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Hiking } from '../../model/hiking';
import { HikingService } from "../../services/hiking-service";
import { Geolocation } from '@ionic-native/geolocation';
import { LocationService } from "../../services/location-service";
import { TimerService } from '../../services/timer-service';

/**
 * Generated class for the DetailDuring page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: "DetailDuring"
})
@Component({
  selector: 'page-detail-during',
  templateUrl: 'detail-during.html',
})
export class DetailDuring {
  current_longitude: number;
  current_latitude: number;

  hiking: Hiking;
  _timerService: TimerService;

  constructor(public navCtrl: NavController, public navParams: NavParams, private hikingService: HikingService, private timerService: TimerService) {

    if(this.navParams.get('hiking') != null){
      this.hiking = this.navParams.get('hiking');
    } else {
       this.hikingService.getSelectedHiking().subscribe( (hiking)=> {
        this.hiking = hiking;
      });
    }

    console.log("selected hiking", this.hiking);

    this._timerService = timerService;
    this._timerService.startTimer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDuring');
  }

  navPop() {
    if (this.navCtrl.getPrevious() != null) {
      this.navCtrl.pop();
    }
  }

}
