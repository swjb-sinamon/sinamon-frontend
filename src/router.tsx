import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import PrivacyPage from './pages/PrivacyPage';
import PermissionRoute from './utils/Route/PermissionRoute';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PermissionRoute
          exact
          path="/"
          success={MainPage}
          failure={() => <Redirect to="/login" />}
        />
        <PermissionRoute
          exact
          path="/login"
          success={() => <Redirect to="/" />}
          failure={LoginPage}
        />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
