'use strict';

import Axios from 'axios';


const DEFAULT_TIMEOUT = 1000;


class Request {

  constructor(url, headers) {
    this.url = url;

    this.Axios = this.init(url, headers);
  }


  init(url, headers) {

    return Axios.create({
      baseURL: url,
      timeout: DEFAULT_TIMEOUT,
      headers: headers
    });
  }


  async getAsync() {

    return await this.Axios.get();
  }
};


export default Request;