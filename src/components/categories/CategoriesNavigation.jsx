import React from 'react';
import {
  Link,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

function CategoriesNavigation() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <li>
        <Link to={`${url}/hot-coffes`}> ver cate</Link>
      </li>

      <Switch>
        <Route exact path={`${path}/`}>
          <h1>targeta de categorias</h1>
        </Route>
        <Route exact path={`${path}/hot-coffes`}>
          <h1>HOT COFFES</h1>
        </Route>

        <Redirect to={`${path}`} />
      </Switch>
    </div>
  );
}

export default CategoriesNavigation;
