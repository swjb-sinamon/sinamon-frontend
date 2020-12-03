import styled from 'styled-components';

const Select = styled.select`
  width: 300px;
  height: 40px;

  background-color: white;
  padding-left: 16px;

  border-radius: 3px;
  border: 1px solid var(--color-gray);

  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 98%;
  background-position-y: 50%;
`;

export default Select;
