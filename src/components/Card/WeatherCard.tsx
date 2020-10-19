import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';
import BlankLine from '../../utils/BlankLine';
import { MediumButton } from '../../atomics/Button';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';
import Api from '../../api';
import convertWeatherStatusToString from '../../utils/Converter/Weather';
import WeatherIcon from '../../atomics/Icon/WeatherIcon';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 80%;
  grid-gap: 10px;
`;

const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledWeatherStatus = styled.p`
  font-size: 14px;
`;

const StyledDustStatus = styled.p`
  font-size: 14px;
`;

const StyledDustContent = styled.b<{ color: string }>`
  color: ${(props) => props.color};
`;

const WeatherCard: React.FC = () => {
  const [weather, setWeather] = useState<string>('');

  useEffect(() => {
    Api.get('/weather').then((res) => setWeather(res.data.data));
  }, []);


  return (
    <Card columnStart={1} columnEnd={3} rowStart={1} rowEnd={2}>
      <CardTitle>오늘 날씨는 어때?</CardTitle>
      <Container>
        <ContentBody>
          <div>
            <WeatherIcon weather={weather} />
            <BlankLine gap={10} />
            <StyledWeatherStatus>{convertWeatherStatusToString(weather)}</StyledWeatherStatus>
          </div>
        </ContentBody>
        <ContentBody>
          <div>
            <StyledDustStatus>
              미세먼지 <StyledDustContent color="var(--color-good)">좋음</StyledDustContent>
            </StyledDustStatus>
            <StyledDustStatus>
              초미세먼지 <StyledDustContent color="var(--color-bad)">나쁨</StyledDustContent>
            </StyledDustStatus>

            <BlankLine gap={20} />

            <MediumButton width={120}>
              <FontAwesomeIcon icon={faUmbrella} /> 우산대여하기
            </MediumButton>
          </div>
        </ContentBody>
      </Container>
    </Card>
  );
};

export default WeatherCard;
