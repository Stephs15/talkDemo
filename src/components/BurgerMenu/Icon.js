import React from 'react'
import styled from 'styled-components';
import { Close, Menu } from 'react-bytesize-icons';

// Menu Icon
// This can easily be a button :)
const StyledIcon = styled.div`
  background-color: transparent;
  width: 50px;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  color: black;
`;

const MenuIcon = ({iconType, ...props}) => <StyledIcon {...props}>
  {iconType === 'close' && <Close /> }
  {iconType === 'burger' && <Menu />}
</StyledIcon>

export default MenuIcon;
