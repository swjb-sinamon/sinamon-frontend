import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Api from '../api';
import { ProfileType } from '../types/Profile';
import { requestNotification } from '../resources/push';

const context = createContext<ProfileType | undefined>(undefined);

export const ProfileProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState<ProfileType | undefined>(undefined);

  const fetchProfile = useCallback(async () => {
    requestNotification();

    const currentToken = localStorage.getItem('fcm_token');

    const res = await Api.get('/auth/me');
    if (!res.data || !res.data.success) return;

    setProfile(res.data.data);

    if (!currentToken) return;
    await Api.post('/fcm/token', {
      token: currentToken
    });

    await Api.post('/fcm/subscribe');
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return <context.Provider value={profile}>{children}</context.Provider>;
};

export const useProfile = () => useContext(context);
