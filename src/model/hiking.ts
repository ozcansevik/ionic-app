import { Step } from "./step";
import { UUID } from 'angular2-uuid';

export class Hiking{

    steps: Array<Step>

    id: string;

    imageUrl: string;

    constructor(public name:string, public description: string, public lieu: string, public duree: Date, public denivele: number, public note: number){
        this.id= UUID.UUID();
        this.steps = [];
    }

}