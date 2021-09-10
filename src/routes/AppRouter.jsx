import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';

function AppRouter() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default AppRouter;
