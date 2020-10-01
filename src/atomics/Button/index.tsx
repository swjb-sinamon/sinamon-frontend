import styled from 'styled-components';

export const SmallButton = styled.button<{ width?: number; height?: number }>`
  width: ${(props) => (props.width ? props.width : 80)}px;
  height: ${(props) => (props.height ? props.height : 22)}px;
  background-color: var(--color-button);
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;

export const MediumButton = styled.button<{ width?: number; height?: number }>`
  width: ${(props) => (props.width ? props.width : 100)}px;
  height: ${(props) => (props.height ? props.height : 30)}px;
  background-color: var(--color-button);
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;

export const HugeButton = styled.button<{ width?: number; height?: number }>`
  width: ${(props) => (props.width ? props.width : 120)}px;
  height: ${(props) => (props.height ? props.height : 40)}px;
  background-color: var(--color-button);
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: var(--color-button-hover);
  }
`;
