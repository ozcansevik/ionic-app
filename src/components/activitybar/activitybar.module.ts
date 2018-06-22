import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { ActivitybarComponent } from '../../components/activitybar/activitybar';
import { TimerComponent } from '../../components/timer/timer';

import { CommonModule } from "@angular/common";
import { MyApp } from '../../app/app.component';

@NgModule({
  declarations: [
    ActivitybarComponent,
    TimerComponent
  ],
  imports: [
    IonicModule,
  ],
  entryComponents: [
    ActivitybarComponent,
    TimerComponent
  ],
  exports : [    
    ActivitybarComponent,
    TimerComponent
  ]
})
export class ActivityBarModule {}
