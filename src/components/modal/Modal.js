import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  color: black;
`;

const CustomModal = ({isOpen, toggleModal}) => {
  return <StyledModal
    isOpen={isOpen}
    onBackgroundClick={() => toggleModal()}
    onEscapeKeydown={() => toggleModal()}
  >
    <span>I am a modal!</span>
    {`bool : ${isOpen}`}
    <button onClick={() => toggleModal()}>Close me</button>
  </StyledModal>
}

export default CustomModal