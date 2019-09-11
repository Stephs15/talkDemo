import React, {useState, useRef} from 'react';
import { Switch, Route } from 'react-router-dom'
import {createGlobalStyle} from 'styled-components';
import './App.css';
import Container from './components/container';
import Header from './components/header';
import Menu from './components/BurgerMenu/Menu'
import MenuIcon from './components/BurgerMenu/Icon'
import PizzaList from './components/PizzaBoxes/PizzaContainer'
import FormContainer from './components/ContactForm/FormContainer';

// Global Style
const GlobalStyle = createGlobalStyle`

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    color: #000;
    line-height: 1.8em;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    margin: 0;
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
  }
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItem = useRef();
  const menuClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
    const elem = menuItem.current.querySelector('a');
    console.log(elem);
    setTimeout(() => elem.focus(), 0)
  }
  return (
    <>
      <Header>
        <MenuIcon iconType={isMenuOpen ? 'close' : 'burger'} onClick={menuClickHandler} />
      </Header>
      <Container role="main">
          <Menu isOpen={isMenuOpen} fowardedRef={menuItem} menuClick={menuClickHandler} />
          <Switch>
            <Route exact path='/' component={PizzaList}/>
            <Route exact path='/contactus' component={FormContainer}/>
          </Switch>
        <GlobalStyle/>
      </Container>
    </>
  );
}

export default App;

/* TODO:
  - Accessibility Testing
  - Add Header to contact form
  - Add click event to the button - console log to emulate
  - Change pizza images
  - Add background color (?)
  - Add a rout with FAQ, with a lot of text and also small
*/