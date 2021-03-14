import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { BlankLine, Card, CardTitle, SCREEN_SIZE } from 'sinamon-sikhye';
import convertWeatherStatusToString from '../../utils/Converter/Weather';
import { convertPm10ToString, convertPm25ToString } from '../../utils/Converter/Dust';
import WeatherIcon from '../../atomics/Icon/WeatherIcon';
import { useWeather } from '../../hooks/useWeather';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 80%;
  grid-gap: 10px;

  position: relative;
`;

const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledTemperature = styled.span`
  font-size: 28px;
  font-weight: 800;
  font-family: NanumSquareRound, sans-serif;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    font-size: 26px;
  }
`;

const StyledWeatherStatus = styled.span`
  font-size: 18px;
  font-weight: 800;
  font-family: NanumSquareRound, sans-serif;
`;

const StyledDustStatus = styled.p`
  font-size: 14px;
`;

const StyledDustContent = styled.b<{ color: string }>`
  color: ${(props) => props.color};
`;

const HelpContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;

  @media screen and (max-width: ${SCREEN_SIZE.SCREEN_MOBILE}) {
    right: -16px;
    bottom: -16px;
  }
`;

const HelpButton = styled.a`
  display: flex;
  width: 30px;
  height: 30px;

  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid var(--color-gray);

  background: white;
  color: black;

  cursor: pointer;

  &:hover {
    background-color: var(--color-button-hover);
    color: white;
  }
`;

const WeatherCard: React.FC = () => {
  const { weather, temp, dust } = useWeather();

  const [pm10Text, pm10Color] = convertPm10ToString(dust.pm10);
  const [pm25Text, pm25Color] = convertPm25ToString(dust.pm25);

  return (
    <Card columnStart={1} columnEnd={3} rowStart={1} rowEnd={2}>
      <CardTitle>
        <span role="img" aria-label="weather">
          ⛅{' '}
        </span>
        오늘 날씨는 어때?
      </CardTitle>
      <Container>
        <ContentBody>
          <WeatherIcon weather={weather} />
        </ContentBody>
        <ContentBody>
          <div>
            <StyledTemperature>{temp} ℃ </StyledTemperature>
            <StyledWeatherStatus>{convertWeatherStatusToString(weather)}</StyledWeatherStatus>

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

        <HelpContainer>
          <HelpButton data-tip data-for="license">
            <FontAwesomeIcon icon={faQuestion} size="xs" />
          </HelpButton>
          <ReactTooltip id="license" place="bottom">
            <p>
              데이터는 실시간 관측된 자료이며 측정소 현지 사정이나
              <br />
              데이터의 수신상태에 따라 미수신될 수 있습니다.
            </p>
            <p>미세먼지 데이터 제공: 환경부, 한국환경공단</p>
          </ReactTooltip>
        </HelpContainer>
      </Container>
    </Card>
  );
};

export default WeatherCard;
