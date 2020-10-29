import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';
import SCREEN_SIZE from '../../styles/screen-size';

const StyledModal = styled(ReactModal)<{ width: number; height: number }>`
  position: absolute;
  top: calc(50% - ${(props) => props.height}px / 2);
  left: calc(50% - ${(props) => props.width}px / 2);
  right: 0;
  bottom: 0;

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  border: none;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.8rem;

  display: grid;
  place-items: center;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    width: 90%;
    height: 90%;
    top: calc(50% - 90% / 2);
    left: calc(50% - 90% / 2);
  }
`;

const CancelButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  left: 92%;
  bottom: 87%;

  border: none;
  background: transparent;

  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--color-button-hover);
  }
`;

interface ModalProps {
  readonly width: number;
  readonly height: number;
  readonly name: string;
  readonly state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Modal: React.FC<ModalProps> = ({ width, height, name, state, children }) => {
  const [isOpen, setOpen] = state;

  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={() => setOpen(false)}
      contentLabel={name}
      width={width}
      height={height}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }
      }}
    >
      <CancelButton onClick={() => setOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </CancelButton>
      {children}
    </StyledModal>
  );
};

export default Modal;
