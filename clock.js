
class Clock {
  constructor() {
    const date = new Date()
    this.hours = date.getHours() + 10
    this.minutes = date.getMinutes()
    this.seconds = date.getSeconds()

    this.printTime()
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000)
  }

  printTime() {
    // Format the time in HH:MM:SS
    const timeString = [this.hours, this.minutes, this.seconds].join(':');
    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    // 1. Increment the time by one second.
    this._incrementSeconds();

    // 2. Call printTime.
    this.printTime()

  }

  _incrementSeconds() {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this._incrementMinutes();
    }
  }

  _incrementMinutes() {
    this.minutes += 1;
    if (this.minutes === 60) {
      this.minutes = 0;
      this._incrementHours();
    }
  }

  _incrementHours() {
    this.hours = (this.hours + 1) % 24;
  }


}


let clock = new Clock(); 

