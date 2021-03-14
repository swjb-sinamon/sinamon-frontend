import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from 'sinamon-sikhye';
import { useSchool } from '../../hooks/useSchool';

const StyledMeal = styled.pre`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
`;

const MealCard: React.FC = () => {
  const { meal } = useSchool();

  return (
    <Card columnStart={3} columnEnd={6} rowStart={1} rowEnd={2}>
      <CardTitle>
        <span role="img" aria-label="meal">
          🍚{' '}
        </span>
        급식 알려줘!
      </CardTitle>
      <StyledMeal>{meal}</StyledMeal>
    </Card>
  );
};

export default MealCard;
