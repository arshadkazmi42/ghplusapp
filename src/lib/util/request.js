'use strict';


import Axios from 'axios';

DEFAULT_TIMEOUT = 1000;


class Request {

  constructor(url) {
    this.url = url;

    this.Axios = this.init(url);
  }

  
  init(url, headers) {

    return Axios.create({
      baseURL: url,
      timeout: DEFAULT_TIMEOUT,
      headers: headers
    });
  }


  get() {

    return this.Axios.get();
  }
};


module.exports = Request;