import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';
import Api from '../../api';

const Content = styled.pre`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
`;

const CalendarCard: React.FC = () => {
  const [calendar, setCalendar] = useState<string[]>([]);

  useEffect(() => {
    Api.get('/school/calendar').then((res) => setCalendar(res.data.data));
  }, []);

  return (
    <Card columnStart={1} columnEnd={6} rowStart={3} rowEnd={4}>
      <CardTitle>곧 있을 행사가 궁금해!</CardTitle>
      <Content>{calendar.map((value) => `${value}\n`)}</Content>
    </Card>
  );
};

export default CalendarCard;
