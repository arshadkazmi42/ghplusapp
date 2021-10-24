'use strict';

import _get from 'lodash/get';


class SearchResultItem {

  constructor(data) {

    this.data = data;
  }


  getGitUrl() {

    return _get(this.data, ['git_url']);
  }


  getHTMLUrl() {

    return _get(this.data, ['html_url']);
  }


  getFileName() {

    return _get(this.data, ['name']);
  }


  getFilePath() {

    return _get(this.data, ['path']);
  }


  getReposiotry() {

    return _get(this.data, ['repository']);
  }


  getScore() {

    return _get(this.data, ['score']);
  }


  isInCompleteResults() {

    return _get(this.data, ['incomplete_results'], false);
  }

}


export default SearchResultItem;