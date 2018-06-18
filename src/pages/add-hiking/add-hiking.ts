import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { HikingService } from '../../services/hiking-service';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { Hiking } from '../../model/hiking';

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
      nom: ['', Validators.required],
      description: ['', Validators.required],
      lieu: ['', Validators.required],
      duree: ['', Validators.required],
      denivelle: ['', Validators.required],
      note: ['', Validators.required],
      steps: this.formBuilder.array([this.initStepsFields()])
    });

  }

  initStepsFields(): FormGroup
  {

    return this.formBuilder.group({
      longitude: [''],
      latitude: ['']
    });
  }

  addNewInputField() : void
{
   const control = <FormArray>this.addHikingForm.controls.steps;
   control.push(this.initStepsFields());
}

removeInputField(i : number) : void
{
   const control = <FormArray>this.addHikingForm.controls.steps;
   control.removeAt(i);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddHikingPage');
  }

  addHiking() {
    let h = new Hiking(this.addHikingForm.controls.nom.value, this.addHikingForm.controls.description.value, this.addHikingForm.controls.lieu.value, this.addHikingForm.controls.duree.value, this.addHikingForm.controls.denivelle.value, this.addHikingForm.controls.note.value);
    
  }

}
