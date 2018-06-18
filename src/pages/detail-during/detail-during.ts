import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Hiking } from '../../model/hiking';
import { HikingService } from "../../services/hiking-service";
import { Geolocation } from '@ionic-native/geolocation';
import { LocationService } from "../../services/location-service";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private hikingService: HikingService) {

    this.hiking = this.hikingService.getSelectedHiking();
    console.log("selected hiking", this.hiking);
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
