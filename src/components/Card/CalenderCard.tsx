import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from 'sinamon-sikhye';
import { useSchool } from '../../hooks/useSchool';

const Content = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
`;

const StyledDay = styled.span<{ isToday: boolean }>`
  font-size: 16px;
  font-weight: bold;

  margin-right: 10px;

  ${(props) => props.isToday && 'color: var(--color-button-hover);'}
`;

const CalendarCard: React.FC = () => {
  const { calendar } = useSchool();

  const day = new Date().getDay();

  const dayArray = ['월', '화', '수', '목', '금'];

  const CalendarContent = () => (
    <Content>
      {dayArray.map((value, index) => (
        <p key={`Day${value}`}>
          <StyledDay isToday={day === index + 1}>{value}</StyledDay>{' '}
          {calendar[index] || '행사가 없습니다'}
        </p>
      ))}
    </Content>
  );

  return (
    <Card columnStart={4} columnEnd={6} rowStart={3} rowEnd={4}>
      <CardTitle>
        <span role="img" aria-label="calendar">
          📆{' '}
        </span>
        학교 행사가 궁금해!
      </CardTitle>
      <CalendarContent />
    </Card>
  );
};

export default CalendarCard;
