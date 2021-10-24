'use strict';


import GithubSearch from './github/search';
import ResponseParser from './github/response-parser'
import RequestProcess from './util/request-process';


class Search {

  constructor(query) {

    this.query = query;

    this.GithubSearch = new GithubSearch(query);
    this.searchUrl = this.GithubSearch.getUrl();
    
    this.RequestProcess = new RequestProcess(this.searchUrl);
  }


  async getResultsAsync() {

    const response = await this.RequestProcess.getAsync();
    
    const responseParser = new ResponseParser(response);
    return responseParser.getSearchResult();
  }
};


export default Search;