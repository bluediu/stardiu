import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AuthContainer from '../components/auth/AuthContainer';
import AuthLoginScreen from '../components/auth/AuthLoginScreen';
import AuthSignInScreen from '../components/auth/AuthSignInScreen';
import { ROUTE } from '../constants/auth-routes';

function AuthRouter() {
  return (
    <AuthContainer>
      <article>
        <Switch>
          <Route
            exact
            path={ROUTE.LOGIN}
            component={AuthLoginScreen}
          />
          <Route
            exact
            path={ROUTE.SIGN_IN}
            component={AuthSignInScreen}
          />

          <Redirect to={ROUTE.LOGIN} />
        </Switch>
      </article>
    </AuthContainer>
  );
}

export default AuthRouter;
