'use strict';


const Util = require('util');


const API = 'https://api.github.com/search/code?o=desc&q='
const SEARCH_QUERY = '%s&type=Code'


class Search {

  constructor(query) {
    
    this.url = this.formatUrl(query);
  }


  formatUrl(query) {

    const searchQuery = Util.format(SEARCH_QUERY, query);
    return `${API}${searchQuery}`;
  }


  getUrl() {

    return this.url;
  }
};


export default Search;