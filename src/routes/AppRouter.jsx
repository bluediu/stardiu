import React, { Suspense, lazy } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { ROUTE } from '../constants/auth-routes';

/* components */
import Error404 from '../components/utils/Error404';
import MainLoader from '../components/utils/main-loader/MainLoader';
import AboutScreen from '../pages/AboutScreen';

const HomeScreen = lazy(() => import('../pages/HomeScreen'));
const MenuScreen = lazy(() => import('../pages/MenuScreen'));
const AuthRouter = lazy(() => import('./AuthRouter'));

function AppRouter() {
  return (
    <HashRouter>
      <div>
        <Suspense fallback={<MainLoader />}>
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

            <Route
              exact
              path={ROUTE.ABOUT}
              component={AboutScreen}
            />

            <Route path="*" component={Error404} />
          </Switch>
        </Suspense>
      </div>
    </HashRouter>
  );
}

export default AppRouter;
