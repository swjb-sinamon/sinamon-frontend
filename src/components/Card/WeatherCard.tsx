import React from 'react';
import styled from 'styled-components';
import BlankLine from '../../utils/BlankLine';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';
import convertWeatherStatusToString from '../../utils/Converter/Weather';
import { convertPm10ToString, convertPm25ToString } from '../../utils/Converter/Dust';
import WeatherIcon from '../../atomics/Icon/WeatherIcon';
import { useWeather } from '../../hooks/useWeather';
import { Heading1 } from '../../atomics/Typography/Heading';

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

const StyledWeatherStatus = styled.span`
  font-size: 18px;
  font-weight: lighter;
`;

const StyledDustStatus = styled.p`
  font-size: 14px;
`;

const StyledDustContent = styled.b<{ color: string }>`
  color: ${(props) => props.color};
`;

const WeatherCard: React.FC = () => {
  const { weather, temp, dust } = useWeather();

  const [pm10Text, pm10Color] = convertPm10ToString(dust.pm10);
  const [pm25Text, pm25Color] = convertPm25ToString(dust.pm25);

  return (
    <Card columnStart={1} columnEnd={3} rowStart={1} rowEnd={2}>
      <CardTitle>
        <span role="img" aria-label="weather">
          ⛅
        </span>
        오늘 날씨는 어때?
      </CardTitle>
      <Container>
        <ContentBody>
          <WeatherIcon weather={weather} />
        </ContentBody>
        <ContentBody>
          <div>
            <Heading1>
              <span>{temp} ℃ </span>
              <StyledWeatherStatus>{convertWeatherStatusToString(weather)}</StyledWeatherStatus>
            </Heading1>

            <BlankLine gap={5} />

            <StyledDustStatus>
              미세먼지 <StyledDustContent color={`var(${pm10Color})`}>{pm10Text}</StyledDustContent>
            </StyledDustStatus>
            <StyledDustStatus>
              초미세먼지{' '}
              <StyledDustContent color={`var(${pm25Color})`}>{pm25Text}</StyledDustContent>
            </StyledDustStatus>
          </div>
        </ContentBody>
      </Container>
    </Card>
  );
};

export default WeatherCard;
