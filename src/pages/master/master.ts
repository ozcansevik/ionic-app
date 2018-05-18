import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Hiking} from '../../model/hiking'
import { Step } from '../../model/step';

/**
 * Generated class for the Master page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-master',
  templateUrl: 'master.html',
})
export class Master {

  hikings: Array<Hiking>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let text =  " Mais je suis près d'oublier que le tableau d'une nature aussi grandiose doit être l'œuvre du peintre ou du poète, dont elle enflamme le génie, et que ma mission doit se borner à diriger le voyageur qui vient en admirer les beautés. Attiré moi-même par la douce paix et le bonheur qui résident au fond de ces bois et de ces déserts, je les ai longtemps parcourus, et, aidé par les observations des artistes qui les fréquentent journellement, j'ai acquis une connaissance de la localité qui m'a mis à même d'en signaler toutes les parties les plus pittoresques, et d'offrir au voyageur les moyens de les visiter avec autant de facilité que d'agrément. Comme il est des personnes qui aiment les longues promenades, d'autres, celles qui ont moins de durée, et que les voyageurs n'ont pas tous le même laps de temps à consacrer à notre forêt, j'en ai classé et divisé les sites par tournées, dont les combinaisons différentes correspondent à tous les désirs"
    let h = new Hiking("Rando 1", text, "Paname", new Date('December 1, 2017 03:24:00'), 450, 4);
    h.steps.push(new Step(1, "Torturez vous le pied"));
    h.steps.push(new Step(2, "Marcher comme un dingue"));
    h.steps.push(new Step(3, "Pleurez, puis reflechir si vous aurez votre licence"));
    h.steps.push(new Step(4, "Demandez de l'aide"));

    this.hikings = [h,h,h]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Master');
  }

  selectHiking(h){
   this.navCtrl.push('DetailBefore',{ 'hiking' : h });
  }
}
