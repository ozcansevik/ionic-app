import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Step } from "../../model/step";
import { LocationService } from "../../services/location-service";

@Component({
  selector: 'map-component',
  templateUrl: 'map-component.html',
})
export class MapComponent implements OnInit {
  loaded: boolean = false;
  watch: any = null;
  useDirection: boolean = true;

  currentLatitude: number;
  currentLongitude: number;

  dirs = [];
  urlBlueMarker = "../../assets/icon/blue_marker.png";

  renderOpts: any;
  @Input() markers: Array<Step>;

  @Input() navigationMode: boolean;

  @ViewChild("map") map : ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private locationService: LocationService) {

    this.locationService.getLocation().subscribe((data) => {
      this.currentLatitude = data.lat;
      this.currentLongitude = data.lng;
      console.log('lat lng', this.currentLatitude, this.currentLongitude)
    })

    this.renderOpts = {
      suppressMarkers: true,
    };
  }

  changeMode() {
    this.useDirection = !this.useDirection;
  }

  ngOnInit() {

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
