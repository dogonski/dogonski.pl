import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Start from 'views/Start';
import Websites from 'views/Websites';

import { routes } from 'routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={Start} />
        <Route path={routes.portfolio} component={Websites} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
