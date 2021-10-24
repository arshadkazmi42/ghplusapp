'use strict';


class ProcessTimer {

  constructor() {

    this.startTime = Date.now();
    this.elaspsedMinutes = null;
  }

  start() {

    this.startTime = Date.now();
  }

  captureElapsedTime() {

    this.elaspsedMinutes = this.millisecondsToMinutes(Date.now() - this.startTime);
  }

  getElapsedMinutes() {

    this.captureElapsedTime();
    return this.elaspsedMinutes;
  }

  millisecondsToMinutes(milliseconds) {

    const seconds = milliseconds / 1000;
    const minutes = seconds / 60;

    return minutes;
  }
};


module.exports = ProcessTimer;