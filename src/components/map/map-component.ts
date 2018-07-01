import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Step } from "../../model/step";
import { LocationService } from "../../services/location-service";

@Component({
  selector: 'map-component',
  templateUrl: 'map-component.html',
})
export class MapComponent implements OnInit {

  useDirection: boolean = true;

  // location of user
  currentLatitude: number;
  currentLongitude: number;

  currentStep: any;

  // contains directions
  dirs = [];
  renderOpts: any;

  urlBlueMarker = "../../assets/icon/blue_marker.png";

  @Input() markers: Array<Step>;

  @Input() navigationMode: boolean;

  // event to inform parent that current reached step is change
  @Output() currentStepChange = new EventEmitter();

  alertIsShowing: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private locationService: LocationService, private alertCtrl: AlertController) {

    this.currentStep = 0;

    this.alertIsShowing = [];

    this.locationService.getLocation().subscribe((data) => {
      this.currentLatitude = data.lat;
      this.currentLongitude = data.lng;

      this.checkStep();
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

      this.initStepValidation();
    }
  }

  /*
  * Function which init array used to check if alert is showed according to a step
  */
  initStepValidation() {
    for (let i = 1; i <= this.markers.length; i++) {
      if (this.markers[i]) {
        this.alertIsShowing[i] = false;
      }
    }
    console.log(this.alertIsShowing);
  }

  /*
  * Function which check location of user to validate next step reached
  */
  checkStep() {

    if (this.markers) {
      const approxiativeStepLatMin = this.markers[this.currentStep].latitude - 0.001;
      const approxiativeStepLatMax = this.markers[this.currentStep].latitude + 0.001;

      const approxiativeStepLongMin = this.markers[this.currentStep].longitude - 0.001;
      const approxiativeStepLongMax = this.markers[this.currentStep].longitude + 0.001;

      if (this.currentLatitude < approxiativeStepLatMax && this.currentLatitude > approxiativeStepLatMin) {
        if (this.currentLongitude < approxiativeStepLongMax && this.currentLongitude > approxiativeStepLongMin) {

          if (!this.alertIsShowing[this.currentStep]) {

            // call step validation popup

            this.alertIsShowing[this.currentStep] = true;

            console.log('on step');

            let alert = this.alertCtrl.create({
              title: 'Confirm step n°' + this.currentStep,
              message: 'Are you on the step n°' + this.currentStep,
              buttons: [
                {
                  text: 'No',
                  role: 'cancel',
                  handler: () => {
                    this.alertIsShowing[this.currentStep] = false;
                  }
                },
                {
                  text: 'Yes',
                  handler: () => {
                    this.currentStepChange.emit(this.currentStep);
                    this.currentStep++;
                  }
                }
              ]
            });
            alert.present();
          }

        }
      }
    }

  }
}
