import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';
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

  stepsReached: any

  constructor(public navCtrl: NavController, public navParams: NavParams,
             private hikingService: HikingService, 
             private timerService: TimerService, private alertCtrl: AlertController) {

    this.stepsReached = [];

    /* get hiking by param in case of nav or get hiking from storage in case of page refresh */
    if(this.navParams.get('hiking') != null){
      this.hiking = this.navParams.get('hiking');
    } else {
       this.hikingService.getSelectedHiking().subscribe( (hiking)=> {
        this.hiking = hiking;
      });
    }

    this._timerService = timerService;
    this._timerService.startTimer();
  }

  navPop() {
    if (this.navCtrl.getPrevious() != null) {
      this.navCtrl.pop();
    }
  }

  /* Function called when new step is reached in hiking
  *  This function update indicator to tell to user the steap reached
  *  Or Show Hiking Finish alert
  */
  currentStepChange(event){

    if(event == this.hiking.steps.length-1){
      this._timerService.pauseTimer();

      let alert = this.alertCtrl.create({
        title: 'Hiking finished',
        subTitle: 'Congratulations you have finished the hiking',
        buttons: ['Ok']
      });
      alert.present();
    }

    const stepReached = event + 1;
    for(let i=0; i < stepReached; i++){
      this.stepsReached[this.hiking.steps[i].number] = true;
    }
  }

}
