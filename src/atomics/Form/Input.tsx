import styled from 'styled-components';

const Input = styled.input<{ width?: number }>`
  width: ${(props) => props.width || 300}px;
  height: 40px;

  background-color: white;
  padding-left: 16px;

  border-radius: 3px;
  border: 1px solid var(--color-gray);
`;

export default Input;
