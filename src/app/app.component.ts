import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Master } from '../pages/master/master';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Master;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen){
  }
}
