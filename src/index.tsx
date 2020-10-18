import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import ReactNotification from 'react-notifications-component';
import * as serviceWorker from './serviceWorker';
import Router from './router';
import { ProfileProvider } from './hooks/useProfile';
import { SchoolProvider } from './hooks/useSchool';

import './styles/global.css';
import 'react-notifications-component/dist/theme.css';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <SchoolProvider>
        <ReactNotification />
        <Router />
      </SchoolProvider>
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
