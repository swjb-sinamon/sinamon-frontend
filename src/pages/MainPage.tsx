import React from 'react';
import styled from 'styled-components';
import { SCREEN_SIZE, MainSideBarContainer, Card, CardTitle } from 'sinamon-sikhye';
import MainSideBar from '../components/MainSideBar';
import WeatherCard from '../components/Card/WeatherCard';
import QRCodeCard from '../components/Card/QRCodeCard';
import MealCard from '../components/Card/MealCard';
import CalendarCard from '../components/Card/CalenderCard';
import useWindowSize from '../hooks/useWindowSize';
import NoticeCard from '../components/Card/NoticeCard';

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

const StyledMobileQRCodeCard = styled(QRCodeCard)`
  display: none;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_TABLET}) {
    display: block;
  }
`;

const MainPage: React.FC = () => {
  const [width] = useWindowSize();
  const tabletSize = parseInt(SCREEN_SIZE.SCREEN_TABLET.replace('px', ''), 10);

  return (
    <MainSideBarContainer>
      <MainSideBar />

      <StyledContent>
        <StyledContentGrid>
          <StyledMobileQRCodeCard />

          <WeatherCard />

          <MealCard />

          <Card columnStart={1} columnEnd={5} rowStart={2} rowEnd={3}>
            <CardTitle>
              <span role="img" aria-label="clock">
                ⏱
              </span>
              무엇을 배울까?
            </CardTitle>
            <p>준비중입니다.</p>
          </Card>

          <QRCodeCard hidden={width <= tabletSize} />

          <NoticeCard />

          <CalendarCard />
        </StyledContentGrid>
      </StyledContent>
    </MainSideBarContainer>
  );
};

export default MainPage;
