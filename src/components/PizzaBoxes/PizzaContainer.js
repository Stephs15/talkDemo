import React from 'react'
import styled from 'styled-components';
import pizzas from './PizzaData';
import Button from './AddToCart';


const StyledPizzaList = styled.div`
  max-width: 90%;
  margin: 20px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fill, 400px);
  grid-row-gap: .5em;
  grid-column-gap: 1em;
`
const StyledPizzaContainer = styled.div`
  max-width: 300px;
  background-color: white;
  color: black;
  margin: 0 auto;
`

const PizzaImg = styled.img`
  width: 300px;
`
const PizzaInfo = styled.div`
  padding: 10px;
`

const Text = styled.span`
  display: block;
`

const PizzaTitle = styled.h3`
  font-size: 20px;
  margin: 0;
`

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const PizzaList = () => {
  return <>
    <Title>Our pizzas!</Title>
    <StyledPizzaList>
      {pizzas.map((pizza) => <StyledPizzaContainer key={pizza.id}>
        <PizzaImg src="https://cdn.pixabay.com/photo/2019/08/04/20/09/pizza-4384650_1280.jpg"/>
        <PizzaInfo>
          <PizzaTitle>{pizza.name}</PizzaTitle>
          <Text>{pizza.description}</Text>
          <Text>{pizza.price}</Text>
        </PizzaInfo>
        <Button>Add to Cart!</Button>
      </StyledPizzaContainer>
      )}
    </StyledPizzaList>
  </>
}

export default PizzaList