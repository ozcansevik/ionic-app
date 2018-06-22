import { Component, Input } from '@angular/core';
import { TimerService } from '../../services/timer-service';

/**
 * Generated class for the TimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'timer',
  templateUrl: 'timer.html'
})
export class TimerComponent {
  private _timer: TimerService;

  constructor(public timer: TimerService) {
    this._timer = timer;
}
}
