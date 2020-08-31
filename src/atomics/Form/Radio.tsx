import styled from 'styled-components';

const Radio = styled.input<{ title?: string }>`
  appearance: none;

  width: 40px;
  height: 40px;

  border: 1px solid var(--color-gray);
  border-radius: 50%;

  background-color: #ffffff;
  cursor: pointer;

  &:checked {
    background-color: #ebf1f5;
  }

  &:before {
    content: '${(props) => props.title}';
    display: flex;
    justify-content: center;
    line-height: 40px;
    font-size: 12px;
    font-weight: 300;
  }
`;

export default Radio;
