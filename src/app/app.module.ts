import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Master } from '../pages/master/master';
import { MapComponent } from '../components/map/map-component';
import { HikingService } from '../services/hiking-service';

import { Geolocation } from '@ionic-native/geolocation';

import { AgmCoreModule } from '@agm/core';
import { LocationService } from "../services/location-service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Master
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXXqdX00iR_GUjnBjQ5ptsbc6LJzII_lg'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Master
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HikingService,
    Geolocation,
    LocationService
  ]
})
export class AppModule {}
