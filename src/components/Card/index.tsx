import React from 'react';
import styled from 'styled-components';
import SCREEN_SIZE from '../../styles/screen-size';

interface CardProps {
  readonly columnStart: number;
  readonly columnEnd: number;
  readonly rowStart: number;
  readonly rowEnd: number;
  readonly hidden?: boolean;
}

const CardContainer = styled.div<CardProps>`
  display: ${(props) => (props.hidden ? 'none' : 'block')};

  grid-column: ${(props) => props.columnStart} / ${(props) => props.columnEnd};
  grid-row: ${(props) => props.rowStart} / ${(props) => props.rowEnd};

  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.8rem;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    width: 70vw;
    margin-bottom: 30px;
  }

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    width: 90vw;
  
`;

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  const { columnStart, columnEnd, rowStart, rowEnd, hidden } = props;
  return (
    <CardContainer
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      hidden={hidden}
    >
      {children}
    </CardContainer>
  );
};

export default Card;
