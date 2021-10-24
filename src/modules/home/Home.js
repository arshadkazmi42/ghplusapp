import React from 'react';

import { Container } from '../../components';

import { Header, Search, Tagline } from './core';


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

    this.state = {}

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = (event) => {
    const target = event.currentTarget || event.target;
    if (target) {
      const id = target.id;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container theme={styles.container.main}>
          <Container theme={styles.container.content}>
            <Container theme={styles.container.header}>
              <Header />
              <Tagline />
            </Container>
            <Search />
          </Container>
        </Container>
      </React.Fragment>
    )
  }
}
