import React, { useEffect } from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { ROUTE } from '../constants/auth-routes';

/* redux */
import { useDispatch, useSelector } from 'react-redux';
import { startCheckingRenewToken } from '../context/actions/auth.action';

/* components */
import Error404 from '../components/utils/Error404';
import PrivateRoute from './PrivateRoute';
import { startCountProducts } from '../context/actions/shoppingCart';

/* Lazy Load */
import {
  AboutScreen,
  CategoriesScreen,
  DetailsScreen,
  HomeScreen,
  ProfileScreen,
  ShoppingCartScreen,
  MenuScreen,
} from '../pages';
import AuthRouter from './AuthRouter';

function AppRouter() {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startCheckingRenewToken());
  }, [dispatch]);

  useEffect(() => {
    if (uid) {
      dispatch(startCountProducts(uid));
    }
  }, [uid]);

  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />

          <PrivateRoute
            path={ROUTE.AUTH_BASE}
            component={AuthRouter}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            path={ROUTE.CART}
            component={ShoppingCartScreen}
            isAuthenticated={!uid}
          />

          <Route path={ROUTE.MENU_BASE} component={MenuScreen} />

          <Route
            exact
            path={ROUTE.ABOUT}
            component={AboutScreen}
          />

          <Route
            exact
            path={ROUTE.DETAILS_NAME}
            component={DetailsScreen}
          />

          <Route
            path={ROUTE.CATEGORIES}
            component={CategoriesScreen}
          />

          <PrivateRoute
            path={ROUTE.PROFILE}
            isAuthenticated={!uid}
            component={ProfileScreen}
          />

          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default AppRouter;
