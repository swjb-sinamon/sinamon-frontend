import React, { createContext, useContext, useEffect, useState } from 'react';
import Api from '../api';
import { ProfileType } from '../types/Profile';

const context = createContext<ProfileType | undefined>(undefined);

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<ProfileType | undefined>(undefined);

  useEffect(() => {
    const currentToken = localStorage.getItem('fcm_token');

    Api.get('/auth/me').then((res) => {
      if (!res.data) return Promise.reject();
      if (!res.data.success) return Promise.reject();
      setProfile(res.data.data);

      if (!currentToken) return Promise.reject();

      return Api.post('/fcm', {
        token: currentToken
      });
    }).then(() => {
      return Api.post('/fcm/subscribe');
    });
  }, []);

  return <context.Provider value={profile}>{children}</context.Provider>;
};

export const useProfile = () => useContext(context);
