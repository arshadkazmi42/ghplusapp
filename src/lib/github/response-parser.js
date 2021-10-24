'use strict';

import _get from 'lodash/get';

import SearchResult from './search-result';


class ResponseParser {

  constructor(response) {

    this.response = response;
  }


  getStatusCode() {

    return _get(this.response, ['statusCode']);
  }


  getResponseData() {

    return _get(this.response, ['data']);
  }


  getSearchResult() {

    const responseData = this.getResponseData();
    return new SearchResult(responseData);
  }

}


export default ResponseParser;