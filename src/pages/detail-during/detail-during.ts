import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Hiking } from '../../model/hiking';

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

  hiking: Hiking;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hiking = this.navParams.get('hiking');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDuring');
  }

}
