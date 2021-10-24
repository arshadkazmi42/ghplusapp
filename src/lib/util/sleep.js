'use strict';


const Logger = require("./logger");


MIN_SECONDS = 100
MAX_SECONDS = 1000


class Sleep {

  constructor() {

    this.wait_seconds = this.getRandomSeconds();
    this.logger = new Logger();
  }


  getRandomSeconds() {

    return Math.random() * (MAX_SECONDS - MIN_SECONDS) + MIN_SECONDS;
  }


  async startAsync(seconds) {

    if (!seconds) {
      seconds = this.wait_seconds;
    }

    this.logger.info(`\nSleeping for ${seconds} seconds`);

    const milliseconds = seconds * 1000;
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
};


module.exports = Sleep;