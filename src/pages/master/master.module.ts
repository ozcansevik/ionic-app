import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Master } from './master';
import { ActivityBarModule } from '../../components/activitybar/activitybar.module'
import { ActivitybarComponent } from '../../components/activitybar/activitybar';

@NgModule({
  declarations: [
    Master
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(Master),
    ActivityBarModule
  ],
})
export class MasterModule {}
