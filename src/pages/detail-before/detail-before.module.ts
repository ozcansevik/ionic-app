import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailBefore } from './detail-before';
import { MapComponentModule } from '../../components/map/map-component.module';



@NgModule({
  declarations: [
    DetailBefore
  ],
  imports: [
    MapComponentModule,
    IonicPageModule.forChild(DetailBefore),
  ],
})
export class DetailBeforeModule {}
