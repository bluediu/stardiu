import React, { Suspense, lazy } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { ROUTE } from '../constants/auth-routes';

/* components */
const HomeScreen = lazy(() => import('../pages/HomeScreen'));
const MenuScreen = lazy(() => import('../pages/MenuScreen'));
const AuthRouter = lazy(() => import('./AuthRouter'));

function AppRouter() {
  return (
    <HashRouter>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route
              path={ROUTE.AUTH_BASE}
              component={AuthRouter}
            />

            <Route
              path={ROUTE.MENU_BASE}
              component={MenuScreen}
            />
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default AppRouter;
