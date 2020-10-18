import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../api';
import { SchoolType } from '../types/School';

const context = createContext<SchoolType>({
  meal: '',
  calendar: ['', '', '', '', '']
});

export const SchoolProvider: React.FC = ({ children }) => {
  const [meal, setMeal] = useState<string>('');
  const [calendar, setCalendar] = useState<string[]>([]);
  const [school, setSchool] = useState<SchoolType>({
    meal: '',
    calendar: ['', '', '', '', '']
  });

  useEffect(() => {
    Api.get('/school/meal?type=today').then((res) => {
      if (!res.data) return;
      if (!res.data.success) return;
      setMeal(res.data.data);
    });
    Api.get('/school/calendar').then((res) => {
      if (!res.data) return;
      if (!res.data.success) return;
      setCalendar(res.data.data);
    });
  }, []);

  useEffect(() => {
    setSchool({
      meal,
      calendar
    });
  }, [meal, calendar]);

  return <context.Provider value={school}>{children}</context.Provider>;
};

export const useSchool = () => useContext(context);
