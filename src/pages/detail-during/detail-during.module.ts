import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailDuring } from './detail-during';
import { MapComponentModule } from '../../components/map/map-component.module';
import { ActivityBarModule } from '../../components/activitybar/activitybar.module';

@NgModule({
  declarations: [
    DetailDuring
  ],
  imports: [
    MapComponentModule,
    ActivityBarModule,
    IonicPageModule.forChild(DetailDuring),
  ]
})
export class DetailDuringModule {}
