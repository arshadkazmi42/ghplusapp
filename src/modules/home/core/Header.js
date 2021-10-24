import React from 'react';

import { Container, Text } from '../../../components';

import { COLORS } from '../../../constants';


const TEXT = 'Gh+'

const STYLE = {
  margin: '5px',
  textShadow: `0px 0px 10px ${COLORS.PALETTE.BORDER_GRAY}`
};


class Header extends React.Component {

  render() {
    return (
      <Container theme={STYLE}>
        <Text color={COLORS.PALETTE.SHADOW} fontSize='100px' fontWeight='normal'>
          {TEXT}
        </Text>
      </Container>
    )
  }
}


export default Header;