import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from 'src/pages/LoginPage';
import RegisterPage from 'src/pages/RegisterPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
