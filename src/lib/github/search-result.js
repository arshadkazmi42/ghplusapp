'use strict';

import _get from 'lodash/get';
import _map from 'lodash/map';

import SearchResultItem from './search-result-item';


class SearchResult {

  constructor(data) {

    this.data = data;

    this.formatItems();
  }


  formatItems() {

    const items = this.getItems();
  
    this.data.items = _map(items, (item) => new SearchResultItem(item));
  }


  getTotalCount() {

    return _get(this.data, ['total_count']);
  }


  getItems() {

    return _get(this.data, ['items']);
  }


  isInCompleteResults() {

    return _get(this.data, ['incomplete_results'], false);
  }

}


export default SearchResult;