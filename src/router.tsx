import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import PrivacyPage from './pages/PrivacyPage';
import PermissionRoute from './utils/Route/PermissionRoute';
import ToSPage from './pages/ToSPage';
import UmbrellaPage from './pages/UmbrellaPage';
import TimetablePage from './pages/TimetablePage';
import ContestPage from './pages/ContestPage';
import AccountPage from './pages/AccountPage';
import EventPage from './pages/EventPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PermissionRoute exact path="/" success={MainPage} failure={LoginPage} />
        <PermissionRoute exact path="/umbrella" success={UmbrellaPage} failure={LoginPage} />
        <PermissionRoute exact path="/timetable" success={TimetablePage} failure={LoginPage} />
        <PermissionRoute exact path="/contest" success={ContestPage} failure={LoginPage} />
        <PermissionRoute exact path="/event" success={EventPage} failure={LoginPage} />
        <PermissionRoute exact path="/account" success={AccountPage} failure={LoginPage} />
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
