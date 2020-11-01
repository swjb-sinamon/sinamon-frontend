import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Sunny } from '../../assets/Weathers/sunny.svg';
import { ReactComponent as Cloudy } from '../../assets/Weathers/cloudy.svg';
import { ReactComponent as CloudySunny } from '../../assets/Weathers/cloudy-and-sunny.svg';
import { ReactComponent as Rainy } from '../../assets/Weathers/rainy.svg';
import { ReactComponent as Snowstorm } from '../../assets/Weathers/snowstorm.svg';
import { ReactComponent as Moon } from '../../assets/Weathers/moon.svg';

interface WeatherIconProps {
  readonly weather: string;
}

const StyledSVG = styled.svg`
  filter: drop-shadow(0 0 30px rgba(169, 169, 169, 0.6));
  width: 120px;
  height: 120px;
`;

const WeatherIcon: React.FC<WeatherIconProps> = ({ weather }) => {
  const hours = new Date().getHours();
  const isNight = (hours >= 18 && hours <= 23) || (hours >= 0 && hours <= 6);

  if (weather === 'CLEAR') {
    if (isNight) {
      return (
        <StyledSVG>
          <Moon />
        </StyledSVG>
      );
    }
    return (
      <StyledSVG>
        <Sunny />
      </StyledSVG>
    );
  }
  if (weather === 'RAIN') {
    return (
      <StyledSVG>
        <Rainy />
      </StyledSVG>
    );
  }
  if (weather === 'CLOUDS') {
    return (
      <StyledSVG>
        <CloudySunny />
      </StyledSVG>
    );
  }
  if (weather === 'SNOW')
    return (
      <StyledSVG>
        <Snowstorm />
      </StyledSVG>
    );
  if (weather === 'HAZE' || weather === 'MIST') {
    return (
      <StyledSVG>
        <Cloudy />
      </StyledSVG>
    );
  }
  return (
    <StyledSVG>
      <CloudySunny />
    </StyledSVG>
  );
};

export default WeatherIcon;
