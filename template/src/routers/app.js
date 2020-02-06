import React from 'react';
import { Switch, Route } from 'dva/router';
import { routerRedux } from 'dva/router';
import Home from '../pages/Home';

const { ConnectedRouter } = routerRedux;

const app = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
};

export default app;
