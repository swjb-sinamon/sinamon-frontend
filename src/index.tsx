import './styles/global.css';
import 'react-notifications-component/dist/theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import ReactNotification from 'react-notifications-component';
import Modal from 'react-modal';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import { ProfileProvider } from './hooks/useProfile';
import { SchoolProvider } from './hooks/useSchool';
import { WeatherProvider } from './hooks/useWeather';

dotenv.config();

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <SchoolProvider>
        <WeatherProvider>
          <ReactNotification />
          <Router />
        </WeatherProvider>
      </SchoolProvider>
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
