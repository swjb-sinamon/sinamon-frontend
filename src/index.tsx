import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import * as serviceWorker from 'src/serviceWorker';
import Router from 'src/router';

import 'src/styles/global.css';

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
