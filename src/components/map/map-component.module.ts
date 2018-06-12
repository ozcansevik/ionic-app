import { NgModule } from '@angular/core';
import { MapComponent } from '../../components/map/map-component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'; 

import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXXqdX00iR_GUjnBjQ5ptsbc6LJzII_lg'
    }),
    CommonModule,
    AgmDirectionModule 
  ],
  exports : [
    MapComponent
  ]
})
export class MapComponentModule {}
