import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Geolocation } from '@ionic-native/geolocation';
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Injectable()
export class LocationService {

  location: BehaviorSubject<{ lat: number, lng: number }>

  constructor(private geolocation: Geolocation) {
    this.location = new BehaviorSubject({ lat: 0, lng: 0 });
    this.geolocation.watchPosition().subscribe((data) => {
      if (data.coords) {
        this.location.next({ lat: data.coords.latitude, lng: data.coords.longitude })
      }
    });
  }

  getLocation(): Observable<any> {
    return this.location;
  }

}