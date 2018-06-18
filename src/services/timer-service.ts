import { Injectable } from '@angular/core';


@Injectable()
export class TimerService {
  private _timer;
  
  private secondsRemaining: number = 0;
  private runTimer: boolean;
  private hasStarted: boolean;
  private displayTime: string;

  isStarted(): boolean { return this.hasStarted; }

  startTimer() {
    clearTimeout(this._timer);
    this._timer = null;
    this.runTimer = false;
    this.secondsRemaining = 0;
    this.hasStarted = true;
    this.runTimer = true;
    this.timerTick();
  }

  pauseTimer() {
    this.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    this._timer = setTimeout(() => {
      if (!this.runTimer) { return; }
      this.secondsRemaining++;
      this.displayTime = this.getSecondsAsDigitalClock(this.secondsRemaining);
      this.timerTick();
    }, 1000);
  }

  getSecondsAsDigitalClock(secondsRemaining: number) {
    const secNum = parseInt(secondsRemaining.toString(), 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

}
