import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddHikingPage } from './add-hiking';



@NgModule({
  declarations: [
    AddHikingPage
  ],
  imports: [
    IonicPageModule.forChild(AddHikingPage),
  ],
})
export class AddHikingModule {}
