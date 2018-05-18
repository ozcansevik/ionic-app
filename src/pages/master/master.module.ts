import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Master } from './master';

@NgModule({
  declarations: [
    Master,
  ],
  imports: [
    IonicPageModule.forChild(Master),
  ],
})
export class MasterModule {}
