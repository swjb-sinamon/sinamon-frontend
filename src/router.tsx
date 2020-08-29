import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from 'src/pages/LoginPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
