import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain, faQrcode, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import { Heading3 } from 'src/atomics/Typography/Heading';
import BlankLine from 'src/utils/BlankLine';
import { MediumButton } from 'src/atomics/Button';
import MainSideBar from 'src/components/MainSideBar';
import Card from 'src/components/Card';
import CardTitle from 'src/atomics/Typography/CardTitle';
import GradientQR from 'src/assets/Gradient/qr';

const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 4fr;
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
`;

const WeatherBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 80%;
  grid-gap: 10px;
`;

const WeatherCenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BBody = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);

    & svg * {
      fill: url(#Gradient__QRCode);
    }
  }
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Container>
        <MainSideBar />

        <StyledContent>
          <StyledContentGrid>
            <Card columnStart={1} columnEnd={3} rowStart={1} rowEnd={2}>
              <CardTitle>오늘 날씨는 어때?</CardTitle>
              <WeatherBody>
                <WeatherCenterContainer>
                  <div>
                    <FontAwesomeIcon icon={faCloudSunRain} size="5x" />
                    <BlankLine gap={10} />
                    <p>비가 주륵</p>
                  </div>
                </WeatherCenterContainer>
                <WeatherCenterContainer>
                  <div>
                    <p>미세먼지: 좋음</p>
                    <p>초미세먼지: 보통</p>

                    <BlankLine gap={20} />

                    <MediumButton width={120}>
                      <FontAwesomeIcon icon={faUmbrella} /> 우산대여하기
                    </MediumButton>
                  </div>
                </WeatherCenterContainer>
              </WeatherBody>
            </Card>

            <Card columnStart={3} columnEnd={6} rowStart={1} rowEnd={2}>
              <CardTitle>급식 알려줘!</CardTitle>
              <p>밤밥</p>
              <p>순두부찌개</p>
              <p>수제어쩌구소스</p>
              <p>취나물어쩌꾸볶음</p>
              <p>배추김치</p>
              <p>젤리</p>
            </Card>

            <Card columnStart={1} columnEnd={5} rowStart={2} rowEnd={3}>
              <CardTitle>무엇을 배울까?</CardTitle>
              <p>[시간표]</p>
            </Card>

            <Card columnStart={1} columnEnd={4} rowStart={3} rowEnd={4}>
              <CardTitle>지금 우산 남았어?</CardTitle>
              <p>[우산개수, 상태]</p>
            </Card>

            <Card columnStart={5} columnEnd={6} rowStart={2} rowEnd={3}>
              <BBody>
                <GradientQR />
                <div>
                  <FontAwesomeIcon icon={faQrcode} size="5x" />
                  <Heading3>QR코드 바로가기</Heading3>
                </div>
              </BBody>
            </Card>

            <Card columnStart={4} columnEnd={6} rowStart={3} rowEnd={4}>
              <CardTitle>곧 있을 행사가 궁금해!</CardTitle>
              <p>[주요 학사일정]</p>
            </Card>
          </StyledContentGrid>
        </StyledContent>
      </Container>
    </>
  );
};

export default MainPage;
