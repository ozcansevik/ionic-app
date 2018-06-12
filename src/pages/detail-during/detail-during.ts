import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Hiking } from '../../model/hiking';
import { HikingService } from "../../services/hiking-service";
import { Geolocation } from '@ionic-native/geolocation';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private hikingService: HikingService,
            private geolocation: Geolocation) {

      this.hiking = this.hikingService.getSelectedHiking();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDuring');
  }

  navPop(){
    if(this.navCtrl.getPrevious() != null){
      this.navCtrl.pop();
    }
  }

  ionViewDidEnter(){
     let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.current_latitude = data.coords.latitude;
      this.current_longitude = data.coords.longitude;
    });
  }

}
