import React from 'react';

import { Container, InputBorder } from '../../../components';
import { COLORS, IDS } from '../../../constants';


const STYLE = {
  CONTAINER: {
    display: 'flex',
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px'
  }
};


const PLACEHOLDER = 'Enter your search query here';


class Search extends React.Component {

  render() {
    return (
      <Container theme={STYLE.CONTAINER}>
        <InputBorder
          id={IDS.ELEMENTS.SEARCH_QUERY_INPUT}
          onChange={this.props.onChange}
          fontSize='20px'
          border={`0.5px solid ${COLORS.PALETTE.TEXT_GRAY}`}
          borderRadius='12px'
          padding='15px'
          placeholder={PLACEHOLDER}
          boxShadow={`1px 10px 30px ${COLORS.PALETTE.BORDER_GRAY}`}
          backgroundColor={COLORS.PALETTE.LIGHT_GRAY}
          border='none'
          color={COLORS.PALETTE.TEXT_SECONDARY}
        />
      </Container>
    )
  }
}


export default Search;