import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivitybarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'activitybar',
  templateUrl: 'activitybar.html'
})
export class ActivitybarComponent {

  text: string;

  constructor() {
    this.text = 'Hello World';
  }

}
