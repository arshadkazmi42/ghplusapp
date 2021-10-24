import React from 'react';

import { ButtonPrimary } from '../../../components';

import { COLORS } from '../../../constants';


const BUTTON_TEXT = 'Search'

const STYLE = {
  margin: '5px',
  backgroundColor: COLORS.PALETTE.TEXT_PRIMARY
};


class Header extends React.Component {

  render() {
    return (
      <ButtonPrimary id={this.props.id} onClick={this.props.onClick} theme={STYLE}>
        {BUTTON_TEXT}
      </ButtonPrimary>
    )
  }
}


export default Header;