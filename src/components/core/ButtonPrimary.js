import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';


const StyledButton = styled.div`
  display: ${props => props.theme.display};
  flex-direction: ${props => props.theme.flexDirection};
  justify-content: ${props => props.theme.justifyContent};
  align-items: ${props => props.theme.alignItems};
  cursor: ${props => props.theme.cursor};
  padding: ${props => props.theme.padding};
  margin-top: ${props => props.theme.marginTop};
  margin-bottom: ${props => props.theme.marginBottom};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  text-align: ${props => props.theme.textAlign};
  font-size: ${props => props.theme.fontSize};
  font-weight: ${props => props.theme.fontWeight};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;

const theme = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '14px 60px',
  marginTop: '20px',
  marginBottom: '20px',
  color: COLORS.PALETTE.WHITE,
  backgroundColor: COLORS.PALETTE.PRIMARY,
  textAlign: 'center',
  fontSize: '15px',
  fontWeight: 'normal',
  border: 'none',
  borderRadius: '5px',
  boxShadow: `0 1px 2px ${COLORS.PALETTE.PRIMARY_VERY_LIGHT}`
};


export default class ButtonPrimary extends React.Component {

  render() {

    const inputTheme = {...theme, ...(this.props.theme || {})}
    return (
      <StyledButton onClick={this.props.onClick} theme={inputTheme}>
        {this.props.children}
      </StyledButton>
    );
  }
}

