import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../api';
import { DustType, WeatherType } from '../types/Weather';

const context = createContext<WeatherType>({
  weather: '',
  temp: 0,
  dust: {
    pm10: 0,
    pm25: 0
  }
});

export const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState<string>('');
  const [temp, setTemp] = useState<number>(0);
  const [dust, setDust] = useState<DustType>({
    pm10: 0,
    pm25: 0
  });

  const [data, setData] = useState<WeatherType>({
    weather: '',
    temp: 0,
    dust: {
      pm10: 0,
      pm25: 0
    }
  });

  useEffect(() => {
    Api.get('/weather').then((res) => {
      if (!res.data) return;
      if (!res.data.success) return;
      setWeather(res.data.data.status);
      setTemp(res.data.data.temp);
    });
    Api.get('/weather/dust').then((res) => {
      if (!res.data) return;
      if (!res.data.success) return;
      setDust(res.data.data);
    });
  }, []);

  useEffect(() => {
    setData({
      weather,
      temp,
      dust
    });
  }, [dust, temp, weather]);

  return <context.Provider value={data}>{children}</context.Provider>;
};

export const useWeather = () => useContext(context);
