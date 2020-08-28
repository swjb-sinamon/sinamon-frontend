import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from './router';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
