'use strict';


import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';

import Request from './request';
import Sleep from './sleep';


const AUTHORIZATION = 'Authorization';
const RETRY_AFTER = 'Retry-After';
const RATE_LIMIT_REMAINING = 'X-RateLimit-Remaining';
const RATE_LIMIT_RESET = 'X-RateLimit-Reset';


class RequestProcess {

  constructor(url, headers) {
    
    this.request = new Request(url, headers);
    this.sleep = new Sleep();
  }


  getHeaders(headers) {

    if (!_isEmpty(headers)) {

      return headers;
    }

    return this.getDefaultHeaders();
  }


  async getAsync() {

    const response = await this.request.getAsync();

    if (response.statusCode === 429) {

      if (await this.isThrottlingAsync(response)) {

        return await this.getAsync();
      }
    }

    if (response.statusCode === 403) {

      if (await this.isGithubRateLimitAsync(response)) {

        return await this.getAsync();
      }
    }

    return response;
  }
  

  getDefaultHeaders() {

    const headers = {};
    const githubToken = ''; // TODO this.settings.getGithubToken();

    if (githubToken) {
      headers[AUTHORIZATION] = `token ${githubToken}`;
    }

    return headers;
  }


  async isThrottlingAsync(response) {

    let sleepTime = null;
    
    const retryAfterSeconds = _get(response, ['headers', RETRY_AFTER]);
    if (retryAfterSeconds) {

      sleepTime = parseInt(retryAfterSeconds);
    }

    await this.sleep.startAsync(sleepTime);
  }


  async isGithubRateLimitAsync(response) {

    const rateLimitRemaining = _get(response, ['headers', RATE_LIMIT_REMAINING]);
    if (rateLimitRemaining) {

      limitRemaining = parseInt(rateLimitRemaining);

      const rateLimitReset = _get(response, ['headers', RATE_LIMIT_RESET]);
      if (limitRemaining === 0 && rateLimitReset) {

        const resetTime = parseInt(rateLimitReset);
        const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
        const sleepTime = resetTime - currentTime + 1;

        return await this.sleep.startAsync(sleepTime);
      }
    }
  }
};


export default RequestProcess;