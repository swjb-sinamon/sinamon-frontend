import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';

const StyledModal = styled(ReactModal)<{ width: number; height: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  border: none;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.8rem;

  &:focus {
    outline: none;
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

const ModalContent = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

interface ModalProps {
  readonly className?: string;
  readonly width: number;
  readonly height: number;
  readonly name: string;
  readonly state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Modal: React.FC<ModalProps> = ({ className, width, height, name, state, children }) => {
  const [isOpen, setOpen] = state;

  return (
    <StyledModal
      className={className}
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
      <ModalContent>
        <div>{children}</div>
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
