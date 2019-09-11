import React from 'react'
import styled from 'styled-components';
import Button from '../PizzaBoxes/AddToCart';
import {Input, FormElement} from './FormElements'

const StyledFormContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`

const FormContainer = () => {
  return <StyledFormContainer>
    <Input placeholder="Email" type="email"/>
    <Input placeholder="Name" type="text"/>
    <FormElement label="Email" inputType="email" inputPlaceholder="Please enter your email" id="emailInput" />
    <Button type="submit">Send!</Button>
  </StyledFormContainer>
}

export default FormContainer