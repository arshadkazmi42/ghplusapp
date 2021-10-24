import React from 'react';

import { Container } from '../../components';
import { ButtonSearch, Header, Search } from './core';

import { IDS } from '../../constants';

import GithubSearch from '../../lib/search';
import { result } from 'lodash';


const styles = {
  container: {
    main: {
      width: '100%',
      display: 'flex',
      overflow: 'hidden'
    },
    content: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '10%',
      paddingBottom: '40px',
      paddingLeft: '240px',
      paddingRight: '240px',
    },
    header: {
      width: '100%',
      textAlign: 'center'
    }
  }
};


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: {},
      items: []
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

    this.renderItems = this.renderItems.bind(this);
  }


  handleOnClick = async (event) => {

    const target = event.currentTarget || event.target;
    if (target) {

      const searchQuery =
        this.state[IDS.ELEMENTS.SEARCH_QUERY_INPUT];

      this.GithubSearch = new GithubSearch(searchQuery);

      const result = await this.GithubSearch.getResultsAsync();
      console.log(result);
      this.setState({ 
        result: result,
        items: result.getItems() 
      });
    }
  }


  handleOnChange = (event) => {

    const target = event.currentTarget || event.target;
    if (target) {

      const id = target.id;
      const value = target.value;

      this.setState({
        [id]: value
      });
    }
  }


  renderItems = () => {

    return this.state.items.map(item => 
      <div key={item.getGitUrl()}>{item.getHTMLUrl()}</div>);
  }


  render() {
    return (
      <React.Fragment>
        <Container theme={styles.container.main}>
          <Container theme={styles.container.content}>
            <Container theme={styles.container.header}>
              <Header />
            </Container>
            <Search onChange={this.handleOnChange} />
            <ButtonSearch onClick={this.handleOnClick} />
            {this.renderItems()}
          </Container>
        </Container>
      </React.Fragment>
    )
  }
}
