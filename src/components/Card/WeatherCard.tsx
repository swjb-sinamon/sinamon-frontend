import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';
import BlankLine from '../../utils/BlankLine';
import { MediumButton } from '../../atomics/Button';
import Card from '../../components/Card';
import CardTitle from '../../atomics/Typography/CardTitle';
import convertWeatherStatusToString from '../../utils/Converter/Weather';
import { convertPm10ToString, convertPm25ToString } from '../../utils/Converter/Dust';
import WeatherIcon from '../../atomics/Icon/WeatherIcon';
import { useWeather } from '../../hooks/useWeather';

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
  const { weather, dust } = useWeather();

  const [pm10Text, pm10Color] = convertPm10ToString(dust.pm10);
  const [pm25Text, pm25Color] = convertPm25ToString(dust.pm25);

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
              미세먼지 <StyledDustContent color={`var(${pm10Color})`}>{pm10Text}</StyledDustContent>
            </StyledDustStatus>
            <StyledDustStatus>
              초미세먼지{' '}
              <StyledDustContent color={`var(${pm25Color})`}>{pm25Text}</StyledDustContent>
            </StyledDustStatus>

            <BlankLine gap={20} />

            <MediumButton width={120} disabled>
              <FontAwesomeIcon icon={faUmbrella} /> 우산대여하기
            </MediumButton>
          </div>
        </ContentBody>
      </Container>
    </Card>
  );
};

export default WeatherCard;
