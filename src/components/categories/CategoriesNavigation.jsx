import React from 'react';
import {
  Link,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import CategoriesCard from './CategoriesCard';
import Fade from 'react-reveal/Fade';
import '../menu/card/Card.css';

function CategoriesNavigation() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      {/*  <li>
        <Link to={`${url}/hot-coffes`}> ver cate</Link>
      </li> */}

      <Switch>
        <Route exact path={`${path}/`}>
          <Fade right cascade>
            <h2 className="mt-5">Categorias</h2>
          </Fade>

          <hr />
          <section className="cards-grid categories-mg">
            <CategoriesCard url={url} />
            <CategoriesCard url={url} />
            <CategoriesCard url={url} />
            <CategoriesCard url={url} />
            <CategoriesCard url={url} />
          </section>
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
