import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import ReactNotification from 'react-notifications-component';
import * as serviceWorker from './serviceWorker';
import Router from './router';

import './styles/global.css';
import 'react-notifications-component/dist/theme.css';
import { ProfileProvider } from './hooks/useProfile';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <ProfileProvider>
      <ReactNotification />
      <Router />
    </ProfileProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
