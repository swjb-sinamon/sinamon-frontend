import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../api';
import { ProfileType } from '../types/Profile';

const context = createContext<ProfileType | undefined>(undefined);

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<ProfileType | undefined>(undefined);

  useEffect(() => {
    Api.get('/auth/me').then((res) => {
      if (!res.data) return;
      if (!res.data.success) return;
      setProfile(res.data.data);
    });
  }, []);

  return <context.Provider value={profile}>{children}</context.Provider>;
};

export const useProfile = () => useContext(context);
