import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import AuthRouter from './AuthRouter';

function AppRouter() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default AppRouter;
