import React, { Suspense, lazy, useEffect } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { ROUTE } from '../constants/auth-routes';

/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { startCheckingRenewToken } from '../context/actions/auth.action';

/* components */
import Error404 from '../components/utils/Error404';
import MainLoader from '../components/utils/main-loader/MainLoader';
import PrivateRoute from './PrivateRoute';

const AboutScreen = lazy(() => import('../pages/AboutScreen'));
const HomeScreen = lazy(() => import('../pages/HomeScreen'));
const MenuScreen = lazy(() => import('../pages/MenuScreen'));
const AuthRouter = lazy(() => import('./AuthRouter'));

function AppRouter() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startCheckingRenewToken());
  }, [dispatch]);

  return (
    <HashRouter>
      <div>
        <Suspense fallback={<MainLoader />}>
          <Switch>
            <Route exact path="/" component={HomeScreen} />

            <PrivateRoute
              path={ROUTE.AUTH_BASE}
              component={AuthRouter}
              isAuthenticated={!!uid}
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

            <Route
              exact
              path={ROUTE.ADMIN_DASHBOARD}
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
