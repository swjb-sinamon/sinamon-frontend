import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;

  background-color: white;
  border-radius: 3px;
  border: 1px solid var(--color-gray);
`;

export const TableHead = styled.thead`
  border-bottom: 1px solid var(--color-gray);
`;

export const HeaderItem = styled.th`
  padding: 1rem;
`;

export const BodyItem = styled.tr`
  text-align: center;

  & td {
    padding: 0.5rem;
  }

  &:last-child td {
    padding-bottom: 1rem;
  }

  &:nth-child(even) {
    background-color: #f5f5f5;
  }
`;
