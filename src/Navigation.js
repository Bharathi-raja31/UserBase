// Imports
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './App';
import Body from './pages/Body';
import AboutApp from './pages/AboutApp';
import NoMatch from './pages/ErrorPage';

const Routes = (props) => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/about-app" component={AboutApp} />
        <Route path="*" render={() => <NoMatch code="404" />} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
