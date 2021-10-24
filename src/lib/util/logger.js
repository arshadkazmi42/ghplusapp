'use strict';


class Logger {
  
  constructor() {}


  debug(line) {
    console.debug(line);
  }


  error(line) {
    console.error(line);
  }


  info(line) {
    console.info(line);
  }

  
  warn(line) {
    console.warn(line);
  }
};


module.exports = Logger;