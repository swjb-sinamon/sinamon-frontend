import './styles/global.css';
import 'react-notifications-component/dist/theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import ReactNotification from 'react-notifications-component';
import Modal from 'react-modal';
import Router from './router';
import { ProfileProvider } from './hooks/useProfile';
import { SchoolProvider } from './hooks/useSchool';
import { WeatherProvider } from './hooks/useWeather';
import { TimetableProvider } from './hooks/useTimetable';
import { registerNotificationEvent } from './resources/push';

dotenv.config();

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <SchoolProvider>
        <WeatherProvider>
          <TimetableProvider>
            <ReactNotification />
            <Router />
          </TimetableProvider>
        </WeatherProvider>
      </SchoolProvider>
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

registerNotificationEvent();
