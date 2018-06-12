import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailDuring } from './detail-during';
import { MapComponentModule } from '../../components/map/map-component.module';

@NgModule({
  declarations: [
    DetailDuring
  ],
  imports: [
    MapComponentModule,
    IonicPageModule.forChild(DetailDuring),
  ],
})
export class DetailDuringModule {}
