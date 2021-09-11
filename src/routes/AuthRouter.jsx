import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ROUTE } from '../constants/auth-routes';

/* components */
import {
  AuthContainer,
  AuthLoginScreen,
  AuthLogo,
  AuthSignInScreen,
} from '../components/auth';

function AuthRouter() {
  return (
    <>
      <header>
        <AuthLogo />
      </header>
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
    </>
  );
}

export default AuthRouter;
