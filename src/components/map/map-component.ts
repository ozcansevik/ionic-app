import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'map-component',
  templateUrl: 'map-component.html',
})
export class MapComponent {

  latitude: any;
  longitude: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
    });

  }

}
