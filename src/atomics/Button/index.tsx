import styled from 'styled-components';

export const SmallButton = styled.button`
  width: 80px;
  height: 22px;
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

export const MediumButton = styled.button`
  width: 100px;
  height: 30px;
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

export const HugeButton = styled.button`
  width: 120px;
  height: 40px;
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
