import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../api';
import { ComciganTimetableType } from '../types/Payload';
import { convertClassToFullClass } from '../utils/Converter/SchoolNumber';
import { useProfile } from './useProfile';

const context = createContext<ComciganTimetableType[][]>([]);

export const TimetableProvider: React.FC = ({ children }) => {
  const profile = useProfile();
  const [timetable, setTimetable] = useState<ComciganTimetableType[][]>([]);

  useEffect(() => {
    if (!profile) return;

    Api.get(
      `/timetable/${profile.studentGrade}/${convertClassToFullClass(
        profile.department,
        profile.studentClass
      )}`
    ).then((res) => {
      if (res.data && res.data.success) {
        setTimetable(res.data.data);
      }
    });
  }, [profile]);

  return <context.Provider value={timetable}>{children}</context.Provider>;
};

export const useTimetable = () => useContext(context);
