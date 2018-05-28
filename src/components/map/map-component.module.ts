import { NgModule } from '@angular/core';
import { MapComponent } from '../../components/map/map-component';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAf7-k6CUMBk97FkOKzhcEhsBUokF99fkk'
    }),
  ],
  exports : [
    MapComponent
  ],
  providers: [
    Geolocation
  ]
})
export class MapComponentModule {}
