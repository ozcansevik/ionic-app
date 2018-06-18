import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { HikingService } from '../../services/hiking-service';
import { FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the AddHikingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  name: "AddHiking"
})
@Component({
  selector: 'page-add-hiking',
  templateUrl: 'add-hiking.html',
})
export class AddHikingPage {

  addHikingForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private hikingService: HikingService, private formBuilder: FormBuilder) {
    this.addHikingForm = this.formBuilder.group({
      nom: [''],
      description: [''],
      lieu: [''],
      duree: [''],
      denivelle: [''],
      note: ['']
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHikingPage');
  }

  addHiking() {

  }

}
