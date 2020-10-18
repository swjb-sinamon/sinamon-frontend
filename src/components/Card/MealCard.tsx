import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';
import Api from '../../api';

const StyledMeal = styled.pre`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
`;

const MealCard: React.FC = () => {
  const [today, setToday] = useState<string>('');

  useEffect(() => {
    Api.get('/school/meal?type=today').then((res) => setToday(res.data.data));
  }, []);

  return (
    <Card columnStart={3} columnEnd={6} rowStart={1} rowEnd={2}>
      <CardTitle>급식 알려줘!</CardTitle>
      <StyledMeal>{today}</StyledMeal>
    </Card>
  );
};

export default MealCard;
