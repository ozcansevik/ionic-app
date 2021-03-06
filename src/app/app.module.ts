import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Master } from '../pages/master/master';
import { MapComponent } from '../components/map/map-component';
import { ActivitybarComponent } from '../components/activitybar/activitybar';

import { HikingService } from '../services/hiking-service';

import { Geolocation } from '@ionic-native/geolocation';

import { AgmCoreModule } from '@agm/core';
import { LocationService } from "../services/location-service";
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TimerService } from '../services/timer-service';

import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXXqdX00iR_GUjnBjQ5ptsbc6LJzII_lg'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HikingService,
    Geolocation,
    LocationService,
    TimerService,
    HttpClient,
  ]
})
export class AppModule {}
