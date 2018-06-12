import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Step } from "../../model/step";

@Component({
  selector: 'map-component',
  templateUrl: 'map-component.html',
})
export class MapComponent {
  watch: any = null;
  useDirection: boolean = true;

  @Input() currentLatitude: number;
  @Input() currentLongitude: number;
  dirs = [];
  urlBlueMarker = "../../assets/icon/blue_marker.png";

  renderOpts: any;
  @Input() markers: Array<Step>;

  @Input() navigationMode: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

    this.renderOpts = {
      suppressMarkers: true,
    };
  }

  changeMode(){
    this.useDirection = !this.useDirection;
  }

  ngOnInit(){

   /* this.watch = this.geolocation.watchPosition();
    this.watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.current_latitude = data.coords.latitude;
      this.current_longitude = data.coords.longitude;
     
    });*/

    if (this.markers) {
      console.log('construct dir')
        for (let i = 0; i <= this.markers.length - 2; i++) {

          let dir = {
            origin: { lat: this.markers[i].latitude, lng: this.markers[i].longitude },
            destination: { lat: this.markers[i + 1].latitude, lng: this.markers[i + 1].longitude },
            travelMode: "WALKING"
          }
          this.dirs.push(dir);

        }
      }
  }

}
