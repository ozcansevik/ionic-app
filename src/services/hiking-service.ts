import { Injectable } from '@angular/core';
import { Hiking } from '../model/hiking';
import { Step } from '../model/step';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Storage } from '@ionic/storage';

@Injectable()
export class HikingService {

  selectedHiking: BehaviorSubject<Hiking>

  hikingsSubject: BehaviorSubject<Array<Hiking>>

  urlHikingLyon: string

  constructor(private http: HttpClient, private storage: Storage) {
    this.constructHikings();
  }

  constructHikings() {

    this.hikingsSubject = new BehaviorSubject([]);

    this.selectedHiking = new BehaviorSubject(new Hiking(null,null,null,null,null,null));

    this.urlHikingLyon = "https://geo.data.gouv.fr/api/geogw/services/556c63dd330f1fcd48345108/feature-types/ms:evg_esp_veg.envpdiprclassement/download?format=GeoJSON&projection=WGS84";


    let hikings = [];

    this.storage.get('hikings').then((value) => {
      if (value) {
        this.hikingsSubject.next(value);

         
          let h = value.find( (h: Hiking) => h.id === localStorage.getItem("selected_hiking"));
          this.selectedHiking.next(h);
        

      } else {
        let text = " Mais je suis près d'oublier que le tableau d'une nature aussi grandiose doit être l'œuvre du peintre ou du poète, dont elle enflamme le génie, et que ma mission doit se borner à diriger le voyageur qui vient en admirer les beautés. Attiré moi-même par la douce paix et le bonheur qui résident au fond de ces bois et de ces déserts, je les ai longtemps parcourus, et, aidé par les observations des artistes qui les fréquentent journellement, j'ai acquis une connaissance de la localité qui m'a mis à même d'en signaler toutes les parties les plus pittoresques, et d'offrir au voyageur les moyens de les visiter avec autant de facilité que d'agrément. Comme il est des personnes qui aiment les longues promenades, d'autres, celles qui ont moins de durée, et que les voyageurs n'ont pas tous le même laps de temps à consacrer à notre forêt, j'en ai classé et divisé les sites par tournées, dont les combinaisons différentes correspondent à tous les désirs"
        let h = new Hiking("Rando 1", text, "Paname", new Date('December 1, 2017 03:24:00'), 450, 4);
        h.steps.push(new Step('1', "Torturez vous le pied", 45.775316, 3.113769));
        h.steps.push(new Step('2', "Marcher comme un dingue", 45.732631, 2.979143));
        h.steps.push(new Step('3', "Pleurez, puis reflechir si vous aurez votre licence", 45.713724, 3.025201));
        h.steps.push(new Step('4', "Demandez de l'aide", 45.755832, 3.139541));

        hikings = [h, h, h];

        this.fetchHiking(hikings);
      }
    }, () => {
      // cant get hikings
    });

    /* if (this.storage.get('hikings') != null) {
 
 
 
     } else {
 
 
     }*/
  }

  getHikings(): Observable<any> {
    return this.hikingsSubject;
  }

  selectHiking(hiking) {
    this.selectedHiking = hiking;
    localStorage.setItem("selected_hiking", hiking.id);
  }

  getSelectedHiking(): Observable<any> {
    return this.selectedHiking;
  }

  addHiking(hiking) {
    //this.hikings.push(hiking);
  }
  fetchHiking(hikings) {

    return this.http.get(this.urlHikingLyon).subscribe((data: any) => {
      data.features.forEach(feature => {

        let hikingName = feature.properties.classementchemin + " " + feature.properties.gid;
        let description = "Randonnée sur : " + feature.properties.classementchemin + ", " +
          "d'une longueur de " + feature.properties.longueur + "m";

        const duree = feature.properties.longueur
        const note = Math.floor(Math.random() * 5) + 1;

        let hiking = new Hiking(hikingName, description, "Lyon", new Date(), 0, note);

        let stepNumber = 1;

        feature.geometry.coordinates.forEach(coordinate => {
          let step = new Step(stepNumber.toString(), "Step n° " + stepNumber, coordinate[1], coordinate[0]);
          hiking.steps.push(step);
          stepNumber++;
        });
        hikings.push(hiking);
      });
      this.storage.set('hikings', hikings);
      this.hikingsSubject.next(hikings);
    });

  }

}