import React from 'react';

import { Container, Text } from '../../../components';

import { COLORS } from '../../../constants';


const TEXT = '{ <> <> }'

const STYLE = {
  marginTop: '10px',
  marginLeft: '5px',
  marginRight: '5px',
  marginBottom: '50px'
};


class Tagline extends React.Component {

  render() {
    return (
      <Container theme={STYLE}>
        <Text color={COLORS.PALETTE.TEXT_SECONDARY} fontSize='40px' letterSpacing='0.5px'>
          {TEXT}
        </Text>
      </Container>
    )
  }
}


export default Tagline;