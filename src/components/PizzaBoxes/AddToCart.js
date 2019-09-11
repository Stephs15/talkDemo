import React from 'react'
import styled from 'styled-components';

// This should not be a div
const StyledButton = styled.div`
  /* Better color #d32f2f */
  background-color: #F44336;
  height: 50px;
  color: white;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: bold;
  /* Extra styles */
  line-height: 50px;
  text-align: center;
  cursor: pointer;
`

const Button = ({children, ...props}) => <StyledButton {...props}>{children}</StyledButton>

export default Button