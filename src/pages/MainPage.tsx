import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainSideBar from '../components/MainSideBar';
import Card from '../components/Card';
import CardTitle from '../atomics/Typography/CardTitle';
import SCREEN_SIZE from '../styles/screen-size';
import Api from '../api';
import WeatherCard from '../components/Card/WeatherCard';
import QRCodeCard from '../components/Card/QRCodeCard';
import MealCard from '../components/Card/MealCard';

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 4fr;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledContent = styled.div`
  margin: 3rem;

  display: flex;
  justify-content: center;
`;

const StyledContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, 240px));
  grid-template-rows: repeat(3, 260px);
  grid-gap: 30px;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledMeal = styled.pre`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
`;

const MainPage: React.FC = () => {
  const [calender, setCalender] = useState<string[]>([]);

  useEffect(() => {
    Api.get('/school/calender').then((res) => setCalender(res.data.data));
  }, []);

  return (
    <>
      <Container>
        <MainSideBar />

        <StyledContent>
          <StyledContentGrid>
            <WeatherCard />

            <MealCard />

            <Card columnStart={1} columnEnd={5} rowStart={2} rowEnd={3}>
              <CardTitle>무엇을 배울까?</CardTitle>
              <p>[시간표]</p>
            </Card>

            <QRCodeCard />

            <Card columnStart={1} columnEnd={6} rowStart={3} rowEnd={4}>
              <CardTitle>곧 있을 행사가 궁금해!</CardTitle>
              <StyledMeal>{calender.map((value) => `${value}\n`)}</StyledMeal>
            </Card>
          </StyledContentGrid>
        </StyledContent>
      </Container>
    </>
  );
};

export default MainPage;
