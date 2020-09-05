import React from 'react';
import styled from 'styled-components';
import CardTitle from 'src/atomics/Typography/CardTitle';

interface CardProps {
  readonly columnStart: number;
  readonly columnEnd: number;
  readonly rowStart: number;
  readonly rowEnd: number;
  readonly title: string;
}

const CardContainer = styled.div<Omit<CardProps, 'title'>>`
  grid-column: ${(props) => props.columnStart} / ${(props) => props.columnEnd};
  grid-row: ${(props) => props.rowStart} / ${(props) => props.rowEnd};

  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.8rem;
`;

const CardBody = styled.div`
  margin-top: 1rem;
`;

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const { columnStart, columnEnd, rowStart, rowEnd, title } = props;
  return (
    <CardContainer
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
    >
      <CardTitle>{title}</CardTitle>
      <CardBody>{children}</CardBody>
    </CardContainer>
  );
};

export default Card;
