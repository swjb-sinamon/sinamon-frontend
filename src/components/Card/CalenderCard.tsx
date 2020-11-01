import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';
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
  ${(props) => props.isToday && 'text-decoration: underline;'}
`;

const CalendarCard: React.FC = () => {
  const { calendar } = useSchool();

  const emptyLength = calendar.filter((value) => value === '').length;
  const day = new Date().getDay();

  const dayArray = ['월', '화', '수', '목', '금'];

  const CalendarContent = () => (
    <Content>
      {dayArray.map((value, index) => (
        <p>
          <StyledDay isToday={day === index}>{value}</StyledDay> {calendar[index]}
        </p>
      ))}
    </Content>
  );

  return (
    <Card columnStart={4} columnEnd={6} rowStart={3} rowEnd={4}>
      <CardTitle>
        <span role="img" aria-label="calendar">
          📆
        </span>
        곧 있을 행사가 궁금해!
      </CardTitle>
      {emptyLength === 5 ? <Content>행사가 없습니다</Content> : <CalendarContent />}
    </Card>
  );
};

export default CalendarCard;
