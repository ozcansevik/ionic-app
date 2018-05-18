import { Step } from "./step";

export class Hiking{

    steps: Array<Step>

    constructor(public name:string, public description: string, public lieu: string, public duree: Date, public denivele: number, public note: number){
        this.steps = [];
    }

}