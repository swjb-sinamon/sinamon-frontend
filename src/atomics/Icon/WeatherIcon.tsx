import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faCloudMoon,
  faCloudMoonRain,
  faCloudShowersHeavy,
  faCloudSun,
  faMoon,
  faSnowflake,
  faSun,
  faSmog
} from '@fortawesome/free-solid-svg-icons';

interface WeatherIconProps {
  readonly weather: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weather }) => {
  const hours = new Date().getHours();
  const isNight = (hours >= 18 && hours <= 23) || (hours >= 0 && hours <= 6);

  if (weather === 'CLEAR') {
    if (isNight) {
      return <FontAwesomeIcon icon={faMoon} size="5x" />;
    }
    return <FontAwesomeIcon icon={faSun} size="5x" />;
  }
  if (weather === 'RAIN') {
    if (isNight) {
      return <FontAwesomeIcon icon={faCloudMoonRain} size="5x" />;
    }
    return <FontAwesomeIcon icon={faCloudShowersHeavy} size="5x" />;
  }
  if (weather === 'CLOUDS') {
    if (isNight) {
      return <FontAwesomeIcon icon={faCloudMoon} size="5x" />;
    }
    return <FontAwesomeIcon icon={faCloud} size="5x" />;
  }
  if (weather === 'SNOW') return <FontAwesomeIcon icon={faSnowflake} size="5x" />;
  if (weather === 'HAZE' || weather === 'MIST') {
    return <FontAwesomeIcon icon={faSmog} size="5x" />;
  }
  return <FontAwesomeIcon icon={faCloudSun} size="5x" />;
};

export default WeatherIcon;
