import React from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  background-color: white;
  padding: 5px;
  font-size: 16px;
`

const StyledLabel = styled.label``

// const StyledFormElement = styled.

const Input = ({...props}) => {
  return <StyledInput {...props} />
}

const FormElement = ({label, inputType, inputPlaceholder, id}) => <>
  <StyledLabel htmlFor={id}>{label}</StyledLabel>
  <Input id={id} type={inputType} placeholder={inputPlaceholder} />
</>


export {Input, FormElement}