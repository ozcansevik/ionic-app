import { Injectable } from '@angular/core';
import { Hiking } from '../model/hiking';
import { Step } from '../model/step';

@Injectable()
export class HikingService {

  selectedHiking: Hiking

  hikings: Array<Hiking>

  constructor() { 
    this.constructHikings();
  }

  constructHikings(){

    if(localStorage.getItem("hikings") != null){

        this.hikings = JSON.parse(localStorage.getItem("hikings"));

    } else {
        let text =  " Mais je suis près d'oublier que le tableau d'une nature aussi grandiose doit être l'œuvre du peintre ou du poète, dont elle enflamme le génie, et que ma mission doit se borner à diriger le voyageur qui vient en admirer les beautés. Attiré moi-même par la douce paix et le bonheur qui résident au fond de ces bois et de ces déserts, je les ai longtemps parcourus, et, aidé par les observations des artistes qui les fréquentent journellement, j'ai acquis une connaissance de la localité qui m'a mis à même d'en signaler toutes les parties les plus pittoresques, et d'offrir au voyageur les moyens de les visiter avec autant de facilité que d'agrément. Comme il est des personnes qui aiment les longues promenades, d'autres, celles qui ont moins de durée, et que les voyageurs n'ont pas tous le même laps de temps à consacrer à notre forêt, j'en ai classé et divisé les sites par tournées, dont les combinaisons différentes correspondent à tous les désirs"
        let h = new Hiking("Rando 1", text, "Paname", new Date('December 1, 2017 03:24:00'), 450, 4);
        h.steps.push(new Step(1, "Torturez vous le pied"));
        h.steps.push(new Step(2, "Marcher comme un dingue"));
        h.steps.push(new Step(3, "Pleurez, puis reflechir si vous aurez votre licence"));
        h.steps.push(new Step(4, "Demandez de l'aide"));

        this.hikings = [h,h,h];
        localStorage.setItem('hikings', JSON.stringify(this.hikings));
    }
  }

  selectHiking(hiking){
     this.selectedHiking = hiking;
     localStorage.setItem("selected_hiking", hiking.id);  
  }

  getSelectedHiking(): Hiking{
      let h = this.hikings.find( (h: Hiking) => h.id === localStorage.getItem("selected_hiking"));
      return h;
  }



}