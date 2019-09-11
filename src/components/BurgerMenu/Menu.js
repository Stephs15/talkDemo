import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

// A nav element would fit this better
const StyledMenuContainer = styled.div`
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
  position: absolute;
  width: 50vw;
  max-width: 400px;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
`

const StyledMenu = styled.ul`
  list-style-type: none;
  height: 100vh;
  background-color: #e6e6e6;
  padding: 60px 0 0 20px;
  margin: 0;
`

const StyledMenuItem = styled.li`
  height: 50px;
  padding: 10px 0;
  font-size: 22px;

  a, a:visited {
    color: black;
    text-decoration: none;
  }
`

const MenuItem = React.forwardRef((props, ref) => (
  <StyledMenuItem ref={ref} onClick={props.onClick}>
    <NavLink to={props.url}>{props.text}</NavLink>
  </StyledMenuItem>
));

// const MenuItem = (props) => (
//   <StyledMenuItem {...props}>
//     <Link to={props.url}>{props.text}</Link>
//   </StyledMenuItem>
// );

const Menu = ({menuClick, fowardedRef, ...props}) => {
  // const myRef = useRef()
  return <>{<StyledMenuContainer {...props}>
    <StyledMenu>
      <MenuItem ref={fowardedRef} text="Contact Us" url="/contactus" onClick={menuClick} />
      <MenuItem text="FAQ" url="/" onClick={menuClick} />
      <MenuItem text="Stuff" url="/" onClick={menuClick} />
      <MenuItem text="Stuff" url="/" onClick={menuClick} />
    </StyledMenu>
  </StyledMenuContainer>}</>
}


export default Menu