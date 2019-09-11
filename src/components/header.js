import React from 'react'
import styled from 'styled-components';

// Header
const StyledHeader = styled.header`
    font-size: 25px;
    color: black;
    z-index: 2;
    /* box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.04); */
    padding: 15px;
`;


const Header = ({children, ...props}) => <StyledHeader {...props}>
    {children}
</StyledHeader>

export default Header;
