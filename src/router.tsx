import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { loadReCaptcha } from 'react-recaptcha-v3';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import PrivacyPage from './pages/PrivacyPage';
import PermissionRoute from './utils/Route/PermissionRoute';
import ToSPage from './pages/ToSPage';
import UmbrellaPage from './pages/UmbrellaPage';

const Router: React.FC = () => {
  useEffect(() => {
    loadReCaptcha(process.env.REACT_APP_RECAPTCHA!);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <PermissionRoute exact path="/" success={MainPage} failure={LoginPage} />
        <PermissionRoute exact path="/umbrella" success={UmbrellaPage} failure={LoginPage} />
        <PermissionRoute
          exact
          path="/login"
          success={() => <Redirect to="/" />}
          failure={LoginPage}
        />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
        <Route exact path="/tos" component={ToSPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
