import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ActivitybarComponent } from '../../components/activitybar/activitybar';

import { CommonModule } from "@angular/common";
import { MyApp } from '../../app/app.component';

@NgModule({
  declarations: [
    ActivitybarComponent
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    ActivitybarComponent
  ],
  exports : [    
    ActivitybarComponent
  ]
})
export class ActivityBarModule {}
