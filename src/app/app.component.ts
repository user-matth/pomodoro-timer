import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pomodoro-timer';

  minutes: number = 25
  seconds: number = 0
  intervalId: any

  constructor() { }

  ngOnInit() {
  }

  increaseMinutes(){
    this.minutes = this.minutes + 1
  }

  decreaseMinutes(){
    this.minutes = this.minutes - 1
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      } else if (this.minutes > 0) {
        this.minutes--;
        this.seconds = 59;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  restartTimer(){
    this.minutes = 25
    this.seconds = 0
  } 
  
}
