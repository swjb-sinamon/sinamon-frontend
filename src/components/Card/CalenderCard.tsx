import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';
import { useSchool } from '../../hooks/useSchool';

const Content = styled.pre`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
`;

const CalendarCard: React.FC = () => {
  const { calendar } = useSchool();

  const emptyLength = calendar.filter((value) => value === '').length;

  return (
    <Card columnStart={4} columnEnd={6} rowStart={3} rowEnd={4}>
      <CardTitle>
        <span role="img" aria-label="calendar">
          📆
        </span>
        곧 있을 행사가 궁금해!
      </CardTitle>
      <Content>
        {emptyLength === 5 ? '행사가 없습니다' : calendar.map((value) => `${value}\n`)}
      </Content>
    </Card>
  );
};

export default CalendarCard;
